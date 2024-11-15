import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { connectToDB } from "@/app/api/utils/database";
import User from "@/app/(models)/User";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: any) {
  await connectToDB();

  const body = await req.text();

  const signature = headers().get("stripe-signature");

  let data;
  let eventType;
  let event;

  // verify Stripe event is legit
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature as string,
      webhookSecret as string
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed. ${err.message}`);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  data = event.data;
  eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        let user;

        const retrievedSession = data.object as Stripe.Checkout.Session; // Type assertion
        const sessionId = retrievedSession.id;
        console.log("Received event data:", JSON.stringify(data, null, 2));
        console.log(sessionId);

        const session = await stripe.checkout.sessions.retrieve(sessionId, {
          expand: ["line_items"],
        });
        const customerId = session.customer as string;
        const customer = await stripe.customers.retrieve(customerId);
        const priceId = session?.line_items?.data[0]?.price?.id;

        if (isCustomer(customer)) {
          let user = await User.findOne({ email: customer.email });

          if (!user) {
            user = await User.create({
              email: customer.email,
              name: customer.name,
              customerId,
            });
          }

          // Update user data + Grant user access
          user.priceId = priceId;
          user.hasAccess = true;
          await user.save();
        } else {
          console.error("Customer is deleted or does not have an email.");
          throw new Error("Customer is deleted or does not have an email.");
        }

        break;
      }

      case "customer.subscription.deleted": {
        const subscription = await stripe.subscriptions.retrieve(
          data.object.object
        );
        const user = await User.findOne({
          customerId: subscription.customer,
        });

        // Revoke access to your product
        user.hasAccess = false;
        await user.save();

        break;
      }

      default:
      // Unhandled event type
    }
  } catch (e: any) {
    console.error("stripe error: " + e.message + " | EVENT TYPE: " + eventType);
  }

  return NextResponse.json({});
}
function isCustomer(
  customer: Stripe.Customer | Stripe.DeletedCustomer
): customer is Stripe.Customer {
  return (customer as Stripe.Customer).email !== undefined;
}

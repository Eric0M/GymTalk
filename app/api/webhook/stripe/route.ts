import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { connectToDB } from "@/app/utils/database";
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

        const session = await stripe.checkout.sessions.retrieve(sessionId, {
          expand: ["line_items"],
        });
        const customerId = session?.customer as string;
        const customer = await stripe.customers.retrieve(customerId);
        const priceId = session?.line_items?.data[0]?.price?.id;

        if ("email" in customer) {
          user = await User.findOne({ email: customer.email });

          if (!user) {
            user = await User.create({
              email: customer.email,
              name: customer.name,
              customerId,
            });

            await user.save();
          }
        } else {
          console.error("No user found");
          throw new Error("No user found");
        }

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.priceId = priceId;
        user.hasAccess = true;
        await user.save();

        // Extra: >>>>> send email to dashboard <<<<

        break;
      }

      case "customer.subscription.deleted": {
        // ❌ Revoke access to the product
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
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

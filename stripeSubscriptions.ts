import { getAuth } from "firebase/auth";
import { getCheckoutUrl } from "./app/components/pricing/singleStripePayment";
import { initFirebase } from "./firebase";

export async function handleCheckout(priceID: string) {
  const app = initFirebase();
  const auth = getAuth(app);
  const user = auth.currentUser;

  const url = await getCheckoutUrl(
    app,
    priceID,
    "subscription",
    "https://gymtalk.ca/subscription-success"
  );

  if (user) {
    window.open("https://buy.stripe.com/test_14kg2b4ykbCAbT2aEL", "_blank");
  } else {
    window.location.href = "/login";
  }
}

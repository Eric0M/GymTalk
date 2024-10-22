import { getAuth } from "firebase/auth";
import { getCheckoutUrl } from "./app/components/pricing/singleStripePayment";
import { initFirebase } from "./firebase";

export async function handleCheckout(
  priceID: string,
  mode: "payment",
  success_url: string
) {
  const app = initFirebase();
  const auth = getAuth(app);
  const user = auth.currentUser;

  const url = await getCheckoutUrl(app, priceID, mode, success_url);

  if (user) {
    window.open(url, "_blank");
  } else {
    window.location.href = "/login";
  }
}

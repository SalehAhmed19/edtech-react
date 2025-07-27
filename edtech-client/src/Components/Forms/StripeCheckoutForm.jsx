import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../payments/stripe/Checkout";

const stripePromise = loadStripe(`${import.meta.env.VITE_Stripe}`);

function StripeCheckoutForm() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}
export default StripeCheckoutForm;

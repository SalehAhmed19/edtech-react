import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCheckoutSession } from "../../RTK/Features/StudentsSlices/PaymentSlice";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";
import useGetCarts from "../../Hooks/Students/useGetCarts";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutStripeEmbeded() {
  const axiosPublic = useAxiosPublic();
  const stripePromise = loadStripe(`${import.meta.env.VITE_Stripe}`);

  const { carts } = useGetCarts();

  console.log(carts);
  const dispatch = useDispatch();

  const clientSecret = useSelector((state) => state.PaymentSlice.clientSecret);

  useEffect(() => {
    // Only dispatch the action if carts data is available and we don't have a clientSecret yet.
    if (carts?.length > 0 && !clientSecret) {
      dispatch(createCheckoutSession({ course: carts, axiosPublic }));
    }
  }, [dispatch, axiosPublic, carts, clientSecret]);
  const options = { clientSecret };

  // Only render the Stripe provider once the fetchClientSecret is available.
  if (!clientSecret && !stripePromise) {
    return <div className="text-center py-8">Loading checkout...</div>;
  }
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

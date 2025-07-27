import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PaymentButton from "../../UI/PaymentButton/PaymentButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import { useForm } from "react-hook-form";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  createPaymentIntent,
  postPayment,
} from "../../../RTK/Features/StudentsSlices/PaymentSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { totalPrice, carts } = useGetCarts();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const clientSecret = useSelector((state) => state.PaymentSlice.clientSecret);

  useEffect(() => {
    dispatch(createPaymentIntent(parseInt(totalPrice)));
  }, [totalPrice, dispatch]);

  const onSubmit = async (data) => {
    // Block native form submission.
    console.log(data);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmPaymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "annonymous",
            email: user?.email || "annonymous",
          },
        },
      });

    if (confirmPaymentError) {
      console.log({ confirmPaymentError });
    } else {
      console.log({ paymentIntent });
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent);
        const trxId = "EDTECH_" + paymentIntent.id.split("_")[1];
        console.log(trxId);
        const payment = {
          name: user?.displayName || "annonymous",
          email: user?.email || "annonymous",
          phone: data.phone,
          carts: carts,
          price: totalPrice,
          staus: "Succeed",
          trxId: trxId,
        };
        await dispatch(postPayment(payment));
        reset();
        navigate("/dashboard/order-history");
        toast.success(`Payment successful: BDT ${totalPrice} !`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="font-semibold">Name</label>
        <input
          {...register("name")}
          type="text"
          value={user.displayName}
          readOnly
          className="border text-[#787878] cursor-not-allowed border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Email</label>
        <input
          {...register("email")}
          type="email"
          value={user.email}
          readOnly
          className="border text-[#787878] cursor-not-allowed border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2 bg-white"
        />
      </div>
      {/*  */}
      <div>
        <label className="font-semibold">Phone</label>
        <input
          {...register("phone")}
          type="text"
          placeholder="Your Phone"
          className="border border-slate-300 border-dashed w-full rounded-md px-5 py-2 mt-2 bg-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Card Details</label>
        {clientSecret && (
          <CardElement
            className="border border-dashed border-slate-300 rounded-md px-5 py-3"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        )}
      </div>

      <button type="submit" className="mx-auto block" disabled={!stripe}>
        <PaymentButton totalPrice={totalPrice} />
        {/* Pay Now */}
      </button>
    </form>
  );
};

export default CheckoutForm;

import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import PaymentButton from "../UI/PaymentButton/PaymentButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../payments/stripe/Checkout";

const stripePromise = loadStripe(`${import.meta.env.VITE_Stripe}`);

function StripeCheckoutForm() {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    console.log(data);
    // toast.success("Message sent!");
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 p-5 rounded-md my-10"
    >
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
      {/*  */}
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </form>
  );
}
export default StripeCheckoutForm;

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import PaymentButton from "../../UI/PaymentButton/PaymentButton";
// import { useForm } from "react-hook-form";
// import useGetCarts from "../../../Hooks/Students/useGetCarts";
// import { useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   createPaymentIntent,
//   postPayment,
// } from "../../../RTK/Features/StudentsSlices/PaymentSlice";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// import useGetAllUsers from "../../../Hooks/Users/useGetAllUsers";
// import { CreditCardIcon } from "@phosphor-icons/react";
// import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";

// const CheckoutForm = () => {
//   const axiosPublic = useAxiosPublic();
//   const { totalPrice, carts } = useGetCarts();
//   // const [user] = useAuthState(auth);
//   const { singleUser } = useGetAllUsers();
//   const navigate = useNavigate();

//   const { register, handleSubmit, reset } = useForm();
//   const stripe = useStripe();
//   const elements = useElements();

//   const dispatch = useDispatch();
//   const clientSecret = useSelector((state) => state.PaymentSlice.clientSecret);
//   const totalPriceInt = parseInt(totalPrice);
//   useEffect(() => {
//     dispatch(createPaymentIntent({ totalPrice: totalPriceInt, axiosPublic }));
//   }, [totalPriceInt, dispatch, axiosPublic]);

//   const onSubmit = async (data) => {
//     // Block native form submission.
//     // // console.log(data);

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       // console.log("[error]", error);
//     } else {
//       // console.log("[PaymentMethod]", paymentMethod);
//     }

//     // confirm payment
//     const { paymentIntent, error: confirmPaymentError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: singleUser?.name || "annonymous",
//             email: singleUser?.email || "annonymous",
//           },
//         },
//       });

//     if (confirmPaymentError) {
//       // console.log({ confirmPaymentError });
//     } else {
//       // console.log({ paymentIntent });
//       if (paymentIntent.status === "succeeded") {
//         // console.log(paymentIntent);
//         const trxId = "EDTECH_" + paymentIntent.id.split("_")[1];
//         // // console.log(trxId);
//         const payment = {
//           name: singleUser?.name || "annonymous",
//           email: singleUser?.email || "annonymous",
//           phone: data.phone,
//           carts: carts,
//           price: totalPrice,
//           staus: "Succeed",
//           trxId: trxId,
//         };
//         await dispatch(postPayment({ payment, axiosPublic }));
//         reset();
//         navigate("/dashboard/order-history");
//         toast.success(`Payment successful: BDT ${totalPrice} !`);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
//       <div>
//         <label className="font-semibold">Name</label>
//         <input
//           {...register("name")}
//           type="text"
//           value={singleUser.name}
//           readOnly={singleUser.name === "" ? false : true}
//           className="border border-gray-200 text-primary cursor-not-allowed w-full rounded-full px-5 py-3 mt-2 bg-white"
//         />
//       </div>
//       {/*  */}
//       <div>
//         <label className="font-semibold">Email</label>
//         <input
//           {...register("email")}
//           type="email"
//           value={singleUser.email}
//           readOnly
//           className="border border-gray-200 text-primary cursor-not-allowed w-full rounded-full px-5 py-3 mt-2 bg-white"
//         />
//       </div>
//       {/*  */}
//       <div>
//         <label className="font-semibold">Phone</label>
//         <input
//           {...register("phone")}
//           type="text"
//           placeholder="Your Phone"
//           className="border border-gray-200 text-primary w-full rounded-full px-5 py-3 mt-2 bg-white"
//         />
//       </div>
//       <div className="flex flex-col gap-2">
//         <label className="font-semibold">Card Details</label>
//         {clientSecret && (
//           <CardElement
//             className="border border-gray-200 text-primary w-full rounded-full px-5 py-4 mt-2 bg-white"
//             options={{
//               style: {
//                 base: {
//                   fontSize: "16px",
//                   color: "#424770",
//                   "::placeholder": {
//                     color: "#aab7c4",
//                   },
//                 },
//                 invalid: {
//                   color: "#9e2146",
//                 },
//               },
//             }}
//           />
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={!stripe}
//         className="bg-primary px-5 py-3 rounded-full text-white flex items-center gap-2 animate-bounce mx-auto mt-10"
//       >
//         Pay Now: {totalPrice} BDT <CreditCardIcon size={32} />
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;
import React from "react";

export default function Checkout() {
  return <div>Checkout</div>;
}

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getSessionStatus,
  postPayment,
} from "../../RTK/Features/StudentsSlices/PaymentSlice";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";
import toast from "react-hot-toast";
import useGetAllUsers from "../../Hooks/Users/useGetAllUsers";
import useGetCarts from "../../Hooks/Students/useGetCarts";
import { ClockCounterClockwiseIcon } from "@phosphor-icons/react";
import { Fade, Zoom } from "react-awesome-reveal";
import PaymentLoader from "../../Components/UI/PaymentLoader/PaymentLoader";

export default function CheckoutSessionCompletion() {
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState();
  const { carts, totalPrice } = useGetCarts();
  const { singleUser } = useGetAllUsers();
  const axiosPublic = useAxiosPublic();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = searchParams.get("session_id");

  //   useEffect(() => {
  //     const fetchSessionStatus = async () => {
  //       const response = await dispatch(
  //         getSessionStatus({ session, axiosPublic })
  //       );

  //       setResponse(response);
  //       //   return response;
  //       const paymentIntent = response.payload.trxId;
  //       const trxId = "SEC" + paymentIntent?.split("_")[1];
  //       if (response.payload.status === "complete") {
  //         console.log(paymentIntent);
  //         // // console.log(trxId);
  //         const payment = {
  //           name: singleUser?.name || "annonymous",
  //           email: singleUser?.email || "annonymous",
  //           carts: carts,
  //           price: totalPrice,
  //           staus: "Succeed",
  //           trxId: trxId,
  //         };
  //         await dispatch(postPayment({ payment, axiosPublic }));
  //         navigate("/dashboard/order-history");
  //         toast.success("Payment successfull!");
  //       } else {
  //         navigate("/dashboard/payments/stripe");
  //         toast.error("Payment failed! Please try again.");
  //       }

  //       console.log(response.payload);
  //     };
  //     fetchSessionStatus();
  //   }, [carts, singleUser, totalPrice, session, navigate, dispatch, axiosPublic]);
  //   console.log(response);

  useEffect(() => {
    const fetchSessionStatus = async () => {
      const response = await dispatch(
        getSessionStatus({ session, axiosPublic })
      );

      setResponse(response);
      //   const paymentIntent = response.payload.trxId;
      //   const trxId = "SEC" + paymentIntent?.split("_")[1];
      //   if (response.payload.status === "complete") {
      //     console.log(paymentIntent);
      //     const payment = {
      //       name: singleUser?.name || "annonymous",
      //       email: singleUser?.email || "annonymous",
      //       carts: carts,
      //       price: totalPrice,
      //       staus: "Succeed",
      //       trxId: trxId,
      //     };
      //     await dispatch(postPayment({ payment, axiosPublic }));
      //     navigate("/dashboard/order-history");
      //   } else {
      //     navigate("/dashboard/payments/stripe");
      //     toast.error("পেমেন্ট ব্যর্থ! অনুগ্রহ করে আবার চেষ্টা করুন।");
      //   }
      if (response.payload.status !== "complete") {
        navigate("/dashboard/payments/stripe");
        toast.error("Payment failed! Please try again.");
      }

      console.log(response.payload);
    };
    fetchSessionStatus();
  }, [axiosPublic, session, dispatch, navigate, carts, totalPrice, singleUser]);

  const handleViewHistory = async () => {
    const paymentIntent = response.payload.trxId;
    const trxId = "SEC" + paymentIntent?.split("_")[1];
    if (response.payload.status === "complete") {
      console.log(paymentIntent);
      const payment = {
        name: singleUser?.name || "annonymous",
        email: singleUser?.email || "annonymous",
        carts: carts,
        price: totalPrice,
        staus: "Succeed",
        trxId: trxId,
      };
      await dispatch(postPayment({ payment, axiosPublic }));
      navigate("/dashboard/order-history");
    }
    // else {
    //   navigate("/dashboard/payments/stripe");
    //   toast.error("পেমেন্ট ব্যর্থ! অনুগ্রহ করে আবার চেষ্টা করুন।");
    // }
  };
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <PaymentLoader />
      <Zoom cascade={true} duration={800}>
        <h3 className="text-green-500 text-3xl font-bold">
          Payment Successfull
        </h3>
      </Zoom>
      <Fade direction="up" cascade={true} duration={800}>
        <button
          onClick={handleViewHistory}
          className="bg-primary text-white rounded-full px-5 py-3 my-5 animate-bounce flex items-center gap-2"
        >
          View Order History <ClockCounterClockwiseIcon size={32} />
        </button>
      </Fade>
    </div>
  );
}

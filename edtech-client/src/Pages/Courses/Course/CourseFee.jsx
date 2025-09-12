import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import { addToCart } from "../../../RTK/Features/StudentsSlices/cartsSlice";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import { BasketIcon, UserCircleCheckIcon } from "@phosphor-icons/react";
import useGetCarts from "../../../Hooks/Students/useGetCarts";
import useEnrolledCourses from "../../../Hooks/Students/useEnrolledCourses";
import { useState } from "react";

export default function CourseFee({ course }) {
  const [user] = useAuthState(auth);
  const { carts } = useGetCarts();
  const { enrolled } = useEnrolledCourses();
  console.log(enrolled[0]?.carts);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPublic = useAxiosPublic();

  const handleAddToCart = async () => {
    {
      user;
    }
    {
      const courseItem = {
        email: user?.email,
        courseName: course.courseTitle,
        image: course.courseBannerImage,
        courseId: course.courseId,
        courseFee: course.courseFee,
        category: course.category,
        instructors: course.instructors,
        status: "Unpaid",
      };
      console.log({ enrolled });
      if (carts.length < 1) {
        if (!enrolled.length) {
          const result = await dispatch(addToCart({ courseItem, axiosPublic }));

          if (result.payload.insertedId) {
            navigate("/dashboard/payments/stripe");
            toast.success("Added to cart!");
          }
        } else {
          toast.error(
            carts.length > 0
              ? "A Course is already added in your cart. Please pay to complete enrollment!"
              : "Youv'e already enrolled a course!"
          );
        }
      }
    }
  };

  return (
    <div className="bg-gray-50 p-5 w-1/2 h-[150px] rounded-md place-items-center ml-auto">
      <h5 className="text-2xl">
        Course Fee:{" "}
        <span className="font-bold">
          {course?.courseFee} <span className="text-primary">BDT</span>
        </span>
      </h5>
      <div className="my-5 flex gap-5">
        <button
          disabled={enrolled?.length}
          onClick={handleAddToCart}
          className={`bg-[#CE2823] disabled:bg-gray-200 disabled:text-gray-400 disabled:animate-none disabled:cursor-none text-white px-5 py-3 rounded-full cursor-pointer flex items-center gap-2 animate-bounce`}
        >
          <UserCircleCheckIcon size={32} />
          Enroll Course
        </button>
      </div>
    </div>
  );
}

import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import { addToCart } from "../../../RTK/Features/StudentsSlices/cartsSlice";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../Hooks/Axios/useAxiosPrivate";
import { BasketIcon } from "@phosphor-icons/react";

export default function CourseFee({ course }) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

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

      const result = await dispatch(addToCart({ courseItem, axiosPrivate }));
      console.log(result);
      if (result.payload.insertedId) {
        navigate("/dashboard/carts");
        toast.success("Added to cart!");
      }
      if (result.payload.message) {
        toast.error("Items already in cart!");
      }
    }
  };

  console.log(course);
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
          onClick={handleAddToCart}
          className="bg-primary text-white px-5 py-3 rounded-full cursor-pointer flex items-center gap-2 animate-bounce"
        >
          <BasketIcon size={32} />
          Add to cart
        </button>
      </div>
    </div>
  );
}

import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase.config";
import { addToCart } from "../../../RTK/Features/StudentsSlices/cartsSlice";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../Hooks/Axios/useAxiosPrivate";

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
    <div className="bg-[#0000000b] p-5 w-1/2 h-[200px] rounded-md place-items-center ml-auto">
      <div className="my-5 flex gap-5 border-b border-slate-300 border-dashed">
        <p className="font-bold">10 Day Left</p>
        <p className="font-bold">10 Seats Available</p>
      </div>
      <h5 className="text-2xl">
        <span className="font-bold">Course Fee:</span> {course?.courseFee} BDT
      </h5>
      <div className="my-5 flex gap-5">
        <Link to="/dashboard/payments/stripe">
          <button className="bg-[#333] text-white px-5 py-2 rounded-md cursor-pointer">
            Enroll Now
          </button>
        </Link>
        <button
          onClick={handleAddToCart}
          className="px-5 py-2 rounded-md cursor-pointer border border-dashed"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

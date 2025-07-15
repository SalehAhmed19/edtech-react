import { useDispatch } from "react-redux";
import { addToCart } from "../../../RTK/Features/StudentsSlices/cartsSlice";
import toast from "react-hot-toast";

export default function CourseFee({ course }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const courseItem = {
      courseName: course.courseTitle,
      courseId: course.courseId,
      courseFee: course.courseFee,
      category: course.category,
      instructors: course.instructors,
    };

    dispatch(addToCart(courseItem));
    toast.success("Added to cart!");
  };
  console.log(course);
  return (
    <div className="bg-[#0000000b] p-5 w-1/2 h-[200px] rounded-md place-items-center ml-auto">
      <div className="my-5 flex gap-5 border-b">
        <p className="font-bold">10 Day Left</p>
        <p className="font-bold">10 Seats Available</p>
      </div>
      <h5 className="text-2xl">
        <span className="font-bold">Course Fee:</span> {course?.courseFee} BDT
      </h5>
      <div className="my-5 flex gap-5">
        <button className="bg-[#333] text-white px-5 py-2 rounded-md cursor-pointer">
          Enroll Now
        </button>
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

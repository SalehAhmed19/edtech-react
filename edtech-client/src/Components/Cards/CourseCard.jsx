import { FaBook, FaTrophy } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function CourseCard({ avatar, title, lesson, level, id }) {
  return (
    <div className="p-5 border border-slate-300 border-dashed rounded-md bg-white">
      <img className="rounded-md w-full" src={avatar} alt="" />
      <div className="mt-5 flex flex-col gap-3">
        <h4 className="text-primary font-semibold text-xl">
          {title.slice(0, 23) + "..."}
        </h4>
        <div className="flex gap-5 text-sm">
          <p className="flex items-center gap-2">
            <FaBook className="text-[#333]" /> Lesson: {lesson}
          </p>
          <p className="flex items-center gap-2">
            <FaTrophy className="text-[#333]" /> Level: {level}
          </p>
        </div>
      </div>
      <Link to={`/courses/${id}`}>
        <button className="bg-[#333] text-white px-5 py-2 rounded-md mt-5 flex items-center gap-5 cursor-pointer">
          Start the course <IoIosArrowForward />
        </button>
      </Link>
    </div>
  );
}

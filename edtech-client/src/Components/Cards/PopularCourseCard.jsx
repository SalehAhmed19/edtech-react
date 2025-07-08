import { FaBook, FaTrophy } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function PopularCourseCard({ avatar, title, lesson, level }) {
  return (
    <div className="p-5 shadow rounded-md bg-white">
      <img className="rounded-md w-full" src={avatar} alt="" />
      <div className="mt-5 flex flex-col gap-3">
        <h4 className="text-primary font-semibold text-xl">{title}</h4>
        <div className="flex gap-5 text-sm">
          <p className="flex items-center gap-2">
            <FaBook className="text-[#FC5A57]" /> Lesson: {lesson}
          </p>
          <p className="flex items-center gap-2">
            <FaTrophy className="text-[#FC5A57]" /> Level: {level}
          </p>
        </div>
      </div>
      <button className="bg-[#FC5A57] text-white px-5 py-2 rounded-md mt-5 flex items-center gap-5">
        Start the course <IoIosArrowForward />
      </button>
    </div>
  );
}

// import { FaBook, FaTrophy } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";

// export default function CourseCard({ avatar, title, lesson, level, id, fee }) {
//   return (
//     <div className="p-5 border border-slate-300 border-dashed rounded-md bg-white">
//       <img className="rounded-md w-full" src={avatar} alt="" />
//       <div className="mt-5 flex flex-col gap-3">
//         <h4 className="text-primary font-semibold text-xl">
//           {title.slice(0, 20) + "..."}
//         </h4>
//         <div className="flex gap-5 text-sm">
//           <p className="flex items-center gap-2">
//             <FaBook className="text-[#333]" /> Lesson: {lesson}
//           </p>
//           <p className="flex items-center gap-2">
//             <FaTrophy className="text-[#333]" /> Level: {level}
//           </p>
//         </div>
//       </div>
//       <div className="flex items-center justify-between">
//         <Link to={`/courses/${id}`}>
//           <button className="flex items-center gap-2 border border-dashed border-slate-300 hover:border-0 hover:bg-[#333] px-5 py-1 rounded-md hover:text-white duration-500 mt-3">
//             Details <IoIosArrowForward />
//           </button>
//         </Link>
//         <p className="font-semibold">{fee} BDT</p>
//       </div>
//     </div>
//   );
// }
import {
  BookOpenIcon,
  DotsThreeOutlineIcon,
  RankingIcon,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ avatar, title, lesson, level, id, fee }) {
  return (
    <div className="shadow-lg rounded-xl">
      <img src={avatar} alt="course-thumbnail" className="rounded-t-xl" />
      <div className="p-5">
        <h4 className="font-bold h-14">{title.slice(0, 40) + "..."}</h4>
        <div className="flex justify-between items-center">
          <p
            className="flex items-center gap-2 text-secondary"
            style={{ fontSize: "14px" }}
          >
            <BookOpenIcon size={18} /> Lesson: {lesson}
          </p>
          <p
            className="flex items-center gap-2 text-secondary"
            style={{ fontSize: "14px" }}
          >
            <RankingIcon size={18} /> Level: {level}
          </p>
        </div>

        <h5 className="my-5 text-center font-bold text-2xl">
          {fee} <span className="text-primary">BDT</span>
        </h5>

        <Link to={`/courses/${id}`}>
          <button className="mx-auto block font-bold hover:text-[#CE2823] duration-300">
            See Details
            <DotsThreeOutlineIcon
              size={32}
              className="mx-auto text-[#CE2823]"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

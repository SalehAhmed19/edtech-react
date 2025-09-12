import {
  BookOpenIcon,
  DotsThreeOutlineIcon,
  RankingIcon,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ avatar, title, lesson, level, id, fee }) {
  return (
    <div className="shadow-lg rounded-xl bg-white">
      <img
        src={avatar}
        alt="course-thumbnail"
        className="rounded-t-xl w-full"
      />
      <div className="p-5">
        <h4 className="font-bold h-14">{title.slice(0, 40) + "..."}</h4>
        <div className="flex justify-between items-center">
          <p
            className="flex items-center gap-2 text-secondary"
            style={{ fontSize: "14px" }}
          >
            <BookOpenIcon size={18} className="text-primary" /> Lesson: {lesson}
          </p>
          <p
            className="flex items-center gap-2 text-secondary"
            style={{ fontSize: "14px" }}
          >
            <RankingIcon size={18} className="text-primary" /> Level: {level}
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

import SectionTitle from "../SectionTitle/SectionTitle";

import useGetCourses from "../../Hooks/Courses/useGetCourses";
import CourseCard from "../Cards/CourseCard";
import { useState } from "react";
import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";
import Show from "../Show/Show";

export default function TrendyCourses() {
  const { courses } = useGetCourses();
  const [show, setShow] = useState(4);
  // console.log(courses.length);
  const trendingCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Trending"
  );

  // console.log(trendingCourses);

  return (
    <div>
      <SectionTitle title={"Trending Courses"} />
      <div className="mt-10 grid grid-cols-4 gap-5">
        {trendingCourses.slice(0, show ? show : 4).map((course) => (
          <CourseCard
            key={course.courseId}
            avatar={course.courseBannerImage}
            title={course.courseTitle}
            lesson={course.lessionsNumber}
            level={course.lessionLevel}
            id={course.courseId}
            fee={course.courseFee}
          />
        ))}
      </div>
      {/* {!show && (
        <button
          onClick={showMore}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See More <FaArrowTurnDown />
        </button>
      )} */}
      {/* {show === 4 ? (
        <button
          onClick={showMore}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See More <FaArrowTurnDown />
        </button>
      ) : (
        <button
          onClick={showLess}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See Less <FaArrowTurnUp />
        </button>
      )} */}
      <Show course={trendingCourses} show={show} setShow={setShow} />
    </div>
  );
}

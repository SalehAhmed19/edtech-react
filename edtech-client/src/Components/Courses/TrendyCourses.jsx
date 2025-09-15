import SectionTitle from "../SectionTitle/SectionTitle";

import useGetCourses from "../../Hooks/Courses/useGetCourses";
import CourseCard from "../Cards/CourseCard";
import { useState } from "react";
import { FaArrowTurnDown, FaArrowTurnUp } from "react-icons/fa6";
import Show from "../Show/Show";
import { Fade, Zoom } from "react-awesome-reveal";

export default function TrendyCourses() {
  const { courses } = useGetCourses();
  const [show, setShow] = useState(4);
  // // console.log(courses.length);
  const trendingCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Trending"
  );

  // // console.log(trendingCourses);

  return (
    <div>
      {/* <SectionTitle title={"Trending Courses"} /> */}
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-center">
          <span className="text-primary">Trendy</span> Courses
        </h2>
        <p className="text-center text-secondary">
          Master the Skills Shaping Tomorrow.
        </p>
      </Fade>

      <div className="mt-10 grid grid-cols-4 gap-5">
        {trendingCourses.slice(0, show ? show : 4).map((course, idx) => (
          <Zoom key={idx} cascade={true} duration={800}>
            <CourseCard
              key={course.courseId}
              avatar={course.courseBannerImage}
              title={course.courseTitle}
              lesson={course.lessionsNumber}
              level={course.lessionLevel}
              id={course.courseId}
              fee={course.courseFee}
            />
          </Zoom>
        ))}
      </div>

      <Fade direction="down" cascade={true} duration={800}>
        <Show course={trendingCourses} show={show} setShow={setShow} />
      </Fade>
    </div>
  );
}

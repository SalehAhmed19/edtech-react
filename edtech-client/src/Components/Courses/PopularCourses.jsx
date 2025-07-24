import SectionTitle from "../SectionTitle/SectionTitle";
// import avatar from "../../assets/images/avtar.jpg";

// import PopularCourseCard from "../Cards/CourseCard";

import CourseCard from "../Cards/CourseCard";
import useGetCourses from "../../Hooks/Courses/useGetCourses";
import { useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import Show from "../Show/Show";

export default function PopularCourses() {
  const { courses } = useGetCourses();
  const [show, setShow] = useState(4);
  // console.log(courses.length);
  const popularCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Popular"
  );

  // console.log(popularCourses);

  return (
    <div>
      <SectionTitle title={"Popular Courses"} />
      <div className="mt-10 grid grid-cols-4 gap-5">
        {/* {newCourses.slice(0, show ? show : 6).map((course) => (
          <NewCourseCard key={course.courseId} course={course} />
        ))} */}
        {popularCourses.slice(0, show ? show : 4).map((course) => (
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
      <Show course={popularCourses} show={show} setShow={setShow} />
    </div>
  );
}

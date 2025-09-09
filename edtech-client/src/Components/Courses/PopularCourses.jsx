import CourseCard from "../Cards/CourseCard";
import useGetCourses from "../../Hooks/Courses/useGetCourses";
import { useState } from "react";
import { FaArrowTurnDown } from "react-icons/fa6";
import Show from "../Show/Show";
import { Fade, Zoom } from "react-awesome-reveal";

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
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-center">
          <span className="text-primary">Popular</span> Courses
        </h2>
        <p className="text-center text-secondary">
          Highly rated and recommended by our learning community.
        </p>
      </Fade>

      <div className="mt-10 grid grid-cols-4 gap-5">
        {/* {newCourses.slice(0, show ? show : 6).map((course) => (
          <NewCourseCard key={course.courseId} course={course} />
          ))} */}
        {popularCourses.slice(0, show ? show : 4).map((course) => (
          <Zoom cascade={true} duration={800}>
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
        <Show course={popularCourses} show={show} setShow={setShow} />
      </Fade>
    </div>
  );
}

import SectionTitle from "../SectionTitle/SectionTitle";
import avatar from "../../assets/images/avtar.jpg";

import PopularCourseCard from "../Cards/PopularCourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../RTK/Features/CoursesSlice/CoursesSlice";

export default function PopularCourses() {
  const popuparCourses = [1, 2, 3, 4];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state.CoursesSlice.courses);
  console.log(courses.length);
  const popularCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Popular"
  );

  console.log(popularCourses);

  return (
    <div>
      <SectionTitle title={"Popular Courses"} />
      <div className="mt-10 grid grid-cols-4 gap-5">
        {popularCourses.map((course) => (
          <PopularCourseCard
            key={course.courseId}
            avatar={course.courseBannerImage}
            title={course.courseTitle}
            lesson={course.lessionsNumber}
            level={course.lessionLevel}
          />
        ))}
      </div>
    </div>
  );
}

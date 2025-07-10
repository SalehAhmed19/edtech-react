import SectionTitle from "../SectionTitle/SectionTitle";
import avatar from "../../assets/images/avtar.jpg";

import PopularCourseCard from "../Cards/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../RTK/Features/CoursesSlice/CoursesSlice";

export default function TrendyCourses() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state.CoursesSlice.courses);
  console.log(courses.length);
  const trendingCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Trending"
  );

  console.log(trendingCourses);

  return (
    <div>
      <SectionTitle title={"Trending Courses"} />
      <div className="mt-10 grid grid-cols-4 gap-5">
        {trendingCourses.map((course) => (
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

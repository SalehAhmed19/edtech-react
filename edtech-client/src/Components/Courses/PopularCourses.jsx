import SectionTitle from "../SectionTitle/SectionTitle";
// import avatar from "../../assets/images/avtar.jpg";

// import PopularCourseCard from "../Cards/CourseCard";

import CourseCard from "../Cards/CourseCard";
import useGetCourses from "../../Hooks/Courses/useGetCourses";

export default function PopularCourses() {
  const { courses } = useGetCourses();
  // console.log(courses.length);
  const popularCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Popular"
  );

  // console.log(popularCourses);

  return (
    <div>
      <SectionTitle title={"Popular Courses"} />
      <div className="mt-10 grid grid-cols-4 gap-5">
        {popularCourses.map((course) => (
          <CourseCard
            key={course.courseId}
            avatar={course.courseBannerImage}
            title={course.courseTitle}
            lesson={course.lessionsNumber}
            level={course.lessionLevel}
            id={course.courseId}
          />
        ))}
      </div>
    </div>
  );
}

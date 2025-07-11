import SectionTitle from "../SectionTitle/SectionTitle";

import PopularCourseCard from "../Cards/CourseCard";

import useGetCourses from "../../Hooks/Courses/useGetCourses";

export default function TrendyCourses() {
  const { courses } = useGetCourses();
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

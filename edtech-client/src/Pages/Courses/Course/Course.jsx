// import { useParams } from "react-router-dom";

import { useParams } from "react-router-dom";
import useGetCourses from "../../../Hooks/Courses/useGetCourses";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Loader from "../../../Components/Loader/Loader";

export default function Course() {
  const { id } = useParams();
  const { courses, isLoading } = useGetCourses();
  console.log(courses);

  const course = courses.find((course) => course.courseId === id);
  console.log(course);

  return (
    <>
      {isLoading ? (
        <div className="h-[80vh]">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-10 my-10 md:max-w-[920px] lg:max-w-[1280px] mx-auto">
          <SectionTitle title={course?.courseTitle} />
          <div>
            <img src={course?.courseBannerImage} alt="" className="w-full" />
          </div>
        </div>
      )}
    </>
  );
}

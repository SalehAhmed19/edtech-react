import { useParams } from "react-router-dom";
import useGetCourses from "../../../Hooks/Courses/useGetCourses";
import FreeClass from "./FreeClass";
import WhatYouLearn from "./WhatYouLearn";
import CourseOutline from "./CourseOutline";
import CourseDesignedFor from "./CourseDesignedFor";
import CourseFee from "./CourseFee";
import CourseTitle from "./CourseTitle";
import Instructors from "./Instructors";
import Help from "./Help";
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
        <div className="my-10 md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-10">
          <img className="w-full" src={course?.courseBannerImage} alt="" />
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-10">
              <CourseTitle course={course} />
              <FreeClass />
              <WhatYouLearn course={course} />
            </div>
            <CourseFee />
          </div>
          <CourseOutline course={course} />
          <CourseDesignedFor course={course} />

          <div className="grid grid-cols-2 gap-5">
            <Instructors course={course} />
            <Help />
          </div>
        </div>
      )}
    </>
  );
}

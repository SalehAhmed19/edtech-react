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

export default function Course() {
  const { id } = useParams();
  const { courses, isLoading } = useGetCourses();
  console.log(courses);

  const course = courses.find((course) => course.courseId === id);
  console.log(course);

  return (
    <>
      {/* {isLoading ? (
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
      )} */}
      <div className="my-10 md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-10">
        <img
          className="w-full"
          src="https://img-c.udemycdn.com/course/750x422/16799_e077_20.jpg"
          alt=""
        />
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-10">
            <CourseTitle />
            <FreeClass />
            <WhatYouLearn />
          </div>
          <CourseFee />
        </div>
        <CourseOutline />
        <CourseDesignedFor />

        <div className="grid grid-cols-2 gap-5">
          <Instructors />
          <Help />
        </div>
      </div>
    </>
  );
}

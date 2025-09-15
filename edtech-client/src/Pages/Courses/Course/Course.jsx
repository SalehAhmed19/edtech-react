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
import LoadingSpinner from "../../../Components/UI/LoadingSpinner";

export default function Course() {
  const { id } = useParams();
  const { courses, isLoading } = useGetCourses();
  // // console.log(courses);

  const course = courses.find((course) => course.courseId === id);
  // // console.log(course);

  return (
    <>
      {isLoading ? (
        <div className="h-[80vh] flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="my-10 md:max-w-[920px] lg:max-w-[1280px] mx-auto flex flex-col gap-10">
          {/* <img className="w-full" src={course?.courseBannerImage} alt="" /> */}
          <iframe
            // width="560"
            // height="315"
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl shadow-2xl"
            src="https://www.youtube.com/embed/UrsmFxEIp5k?si=4GJjoCz4C-KwBLDP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-10">
              <CourseTitle course={course} />
              <FreeClass />
              <WhatYouLearn course={course} />
            </div>
            <CourseFee course={course} />
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

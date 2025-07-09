import curve from "../../assets/images/curve.svg";
import avatar from "../../assets/images/avtar.jpg";
import PopularCourseCard from "../Cards/PopularCourseCard";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../RTK/Features/CoursesSlice/CoursesSlice";
import { useEffect } from "react";

export default function FreeCourses() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  const courses = useSelector((state) => state.CoursesSlice.courses);
  const freeCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Free"
  );

  return (
    <div className="relative my-20">
      <div className="flex items-center justify-between md:max-w-[920px] lg:max-w-[1280px] mx-auto">
        <div>
          <h2 className="text-[40px] font-semibold text-[#FC5A57]">
            Free Courses
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="bg-[#FC5A57] px-5 py-2 text-center rounded-md text-white mt-5 cursor-pointer">
            Enroll Now
          </button>
        </div>
        <div className="my-10 z-10 grid grid-cols-3 gap-5">
          {freeCourses.slice(0, 6).map((course) => (
            <PopularCourseCard
              key={course.courseId}
              avatar={avatar}
              title={course.courseTitle}
              lesson={course.lessionsNumber}
              level={course.lessionLevel}
            />
          ))}
        </div>
        <img src={curve} alt="" className="absolute right-0 my-auto w-3/4" />
      </div>
    </div>
  );
}

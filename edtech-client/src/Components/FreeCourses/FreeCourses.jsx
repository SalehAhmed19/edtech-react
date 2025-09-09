import curve from "../../assets/images/curve.svg";
import avatar from "../../assets/images/avtar.jpg";
import useGetCourses from "../../Hooks/Courses/useGetCourses";
import CourseCard from "../Cards/CourseCard";
import { Fade, Zoom } from "react-awesome-reveal";

export default function FreeCourses() {
  const { courses } = useGetCourses();
  const freeCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "Free"
  );

  return (
    <div className="relative my-20">
      <div>
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[45px] font-bold text-center">
            <span className="text-primary">Free</span> Courses
          </h2>
          <p className="text-center text-secondary">
            Elevate your skills without the cost.
          </p>
        </Fade>
      </div>
      <div className="flex items-center justify-center md:max-w-[920px] lg:max-w-[1280px] mx-auto">
        <div className="my-10 z-10 grid grid-cols-3 gap-5">
          {freeCourses.slice(0, 6).map((course) => (
            <Zoom cascade={true} duration={800}>
              <CourseCard
                key={course.courseId}
                avatar={avatar}
                title={course.courseTitle}
                lesson={course.lessionsNumber}
                level={course.lessionLevel}
                id={course.courseId}
                fee={course.courseFee}
              />
            </Zoom>
          ))}
        </div>
        <img src={curve} alt="" className="absolute right-0 my-auto w-3/4" />
      </div>
    </div>
  );
}

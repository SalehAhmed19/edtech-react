import SectionTitle from "../SectionTitle/SectionTitle";
import NewCourseCard from "../Cards/NewCourseCard";
import useGetCourses from "../../Hooks/Courses/useGetCourses";
import { useState } from "react";
import { ArrowFatLinesDownIcon } from "@phosphor-icons/react";

export default function NewCourses() {
  const [show, setShow] = useState();
  const { courses } = useGetCourses();
  const newCourses = courses.filter(
    (course) => course.coursesPopularityStatus === "New"
  );

  const showMore = () => {
    setShow(newCourses.length);
  };

  return (
    <div>
      {/* <SectionTitle title={"Our New Courses"} /> */}
      <h2 className="text-[45px] font-bold text-center">
        <span className="text-primary">Trendy</span> Courses
      </h2>
      <p className="text-center text-secondary mb-10">
        Explore the latest trends in tech with our newest offering.
      </p>

      <div className="grid grid-cols-2 gap-10">
        {newCourses.slice(0, show ? show : 6).map((course) => (
          <NewCourseCard key={course.courseId} course={course} />
        ))}
      </div>
      {!show && (
        <button
          onClick={showMore}
          className="mx-auto flex items-center gap-2 my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See More{" "}
          <ArrowFatLinesDownIcon
            size={32}
            className="text-primary animate-bounce"
          />
        </button>
      )}
    </div>
  );
}

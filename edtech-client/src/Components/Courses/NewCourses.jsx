import SectionTitle from "../SectionTitle/SectionTitle";
import NewCourseCard from "../Cards/NewCourseCard";
import useGetCourses from "../../Hooks/Courses/useGetCourses";
import { useState } from "react";

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
      <SectionTitle title={"Our New Courses"} />
      <p className="my-10 mx-40 text-center text-[#787878]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore natus
        numquam quis, minima totam possimus ab error <br /> iste maiores sed
        quae aspernatur ipsam sit dolorem quos ipsum rerum nostrum laborum.
      </p>

      <div className="grid grid-cols-2 gap-10">
        {newCourses.slice(0, show ? show : 6).map((course) => (
          <NewCourseCard key={course.courseId} course={course} />
        ))}
      </div>
      {!show && (
        <button
          onClick={showMore}
          className="mx-auto block bg-[#333] text-white my-5 px-5 py-2 rounded-md cursor-pointer"
        >
          See More
        </button>
      )}
    </div>
  );
}

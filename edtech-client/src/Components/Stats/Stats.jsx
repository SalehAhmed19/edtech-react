import {
  BooksIcon,
  BriefcaseIcon,
  ChalkboardTeacherIcon,
  StudentIcon,
} from "@phosphor-icons/react";
import useGetCourses from "../../Hooks/Courses/useGetCourses";
import { Zoom } from "react-awesome-reveal";

export default function Stats() {
  const { courses } = useGetCourses();
  const data = [
    {
      id: 1,
      title: "Students",
      value: 4024,
      icon: <StudentIcon size={42} />,
    },
    {
      id: 2,
      title: "Courses",
      value: courses.length,
      icon: <BooksIcon size={42} />,
    },
    {
      id: 3,
      title: "Instructors",
      value: 35,
      icon: <ChalkboardTeacherIcon size={42} />,
    },
    {
      id: 4,
      title: "Job Placement",
      value: 2560,
      icon: <BriefcaseIcon size={42} />,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-5 my-20 py-5 bg-white">
      {data.map((d, idx) => (
        <Zoom key={idx} cascade={true} duration={800}>
          <div className="flex items-center justify-center gap-5 p-5">
            <div className="w-10 h-10 rounded-full bg-[#33330] flex justify-center items-center">
              <span className="text-primary">{d.icon}</span>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">{d.value}</h2>
              <p className="text-[#787878]">{d.title}</p>
            </div>
          </div>
        </Zoom>
      ))}
    </div>
  );
}

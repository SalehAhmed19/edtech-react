import { ShieldStarIcon, TrashIcon } from "@phosphor-icons/react";
import DashboardSectionTitle from "../../Components/SectionTitle/DashboardSectionTitle";
import useGetCourses from "../../Hooks/Courses/useGetCourses";

export default function AllCourses() {
  const { courses } = useGetCourses();
  return (
    <div>
      <DashboardSectionTitle title={"All Courses"} />
      <div className="border border-gray-200 rounded-xl p-5 h-[85vh] overflow-y-scroll overflow-x-scroll">
        <table className="w-full relative">
          <tr className="text-left">
            <th>Course ID</th>
            <th>Course Title</th>
            <th>Lessons</th>
            <th>Level</th>
            <th>Course Fee</th>
            <th></th>
          </tr>
          {courses?.map((user, idx) => (
            <tr
              key={idx}
              className={`${user.role === "student" && "bg-gray-50"} ${
                user.role === "teacher" && "bg-blue-50"
              } ${user.role === "admin" && "bg-White text-primary font-bold"}`}
            >
              <td className="text-[#787878]">SEC_{user.courseId}</td>
              <td className="font-bold flex items-center gap-2">
                <img
                  src={user.courseBannerImage}
                  alt="course-thumbnail"
                  className="w-20 rounded-lg"
                />
                {user.courseTitle}
              </td>
              <td>{user.lessionsNumber}</td>
              <td>{user.lessionLevel}</td>
              <td>{user.courseFee} BDT</td>
              <td>{user.role}</td>
              <td className="flex items-center gap-5 p-5">
                <div className="text-white p-2 bg-primary rounded-full cursor-pointer">
                  <TrashIcon size={32} />
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import course from "../../../assets/images/course.svg";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import HelpBanner from "../HelpBanner";

export default function StudentCourses() {
  return (
    <div className="flex flex-col justify-center gap-10">
      <DashboardSectionTitle title={"My Courses"} />

      <div className="border border-dashed border-slate-300 p-5 rounded-md text-center place-content-center py-20">
        <img src={course} alt="" className="mx-auto my-2" />
        <SectionTitle title={"You haven't enrolled in any courses yet :("} />

        <p>Enroll now and develop yourself as skilled.</p>
        <Link to="/courses">
          <button className="text-white bg-[#333] px-5 py-2 rounded-md mt-5">
            Enroll Courses
          </button>
        </Link>
      </div>
      <HelpBanner />
    </div>
  );
}

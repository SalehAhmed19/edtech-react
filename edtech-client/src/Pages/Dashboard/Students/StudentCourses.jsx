import { Link } from "react-router-dom";
import course from "../../../assets/images/course.svg";
import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import HelpBanner from "../HelpBanner";
import { Fade } from "react-awesome-reveal";
import DashboardPlaceholder from "../../../Components/UI/DashboardHomeCourseCard/DashboardPlaceholder";
import { ArrowBendDownRightIcon, BooksIcon } from "@phosphor-icons/react";

import LoadingSpinner from "../../../Components/UI/LoadingSpinner";
import DashboardHomeCourseCard from "../../../Components/UI/DashboardHomeCourseCard/DashboardHomeCourseCard";
import useEnrolledCourses from "../../../Hooks/Students/useEnrolledCourses";

export default function StudentCourses() {
  const { enrolled, isLoading, isError } = useEnrolledCourses();
  const enrolledCourses = enrolled.map((enroll) => enroll.courses);
  console.log(enrolledCourses);
  enrolledCourses.map((item) => item.map((i) => console.log(i)));
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-10">
      <Fade direction="up" cascade={true} duration={800}>
        <h2 className="text-[45px] font-bold text-primary">Courses</h2>
      </Fade>

      {!enrolled ? (
        <DashboardPlaceholder
          element={<BooksIcon size={52} className="mx-auto text-primary" />}
          icon={<ArrowBendDownRightIcon size={32} />}
          title={"You haven't enrolled in any courses yet :("}
          subtitle={"Enroll now and develop yourself as skilled."}
          btn={"Enroll Courses"}
          link={"/courses"}
        />
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {enrolledCourses.map((item) =>
            item.map((i, idx) => <DashboardHomeCourseCard key={idx} cart={i} />)
          )}
        </div>
      )}

      <HelpBanner />
    </div>
  );
}

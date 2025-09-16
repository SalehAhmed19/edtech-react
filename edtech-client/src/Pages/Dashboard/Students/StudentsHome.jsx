import Calendar from "../../../Components/UI/Calendar/Calendar";
import { Fade } from "react-awesome-reveal";
import useEnrolledCourses from "../../../Hooks/Students/useEnrolledCourses";
import Charts from "../../../Components/UI/Charts/Charts";
import DashboardHomeCourseVerticalCard from "../../../Components/UI/DashboardHomeCourseVerticalCard/DashboardHomeCourseVerticalCard";
import { PencilRulerIcon, UserCheckIcon } from "@phosphor-icons/react";

export default function StudentsHome() {
  const { enrolled } = useEnrolledCourses();
  const enrolledCourses = enrolled[0]?.carts;

  return (
    <div className="grid md:grid-cols-2 place-content-center md:gap-5 p-5 md:p-0">
      <div className="flex flex-col gap-10">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[35px] md:text-[45px] font-bold">
            <span className="text-primary">Dashboard</span>
          </h2>
        </Fade>
        {enrolledCourses?.length > 0 && (
          <div>
            <h4 className="font-bold text-xl mb-5">
              <span className="text-primary">Enrolled</span> Courses
            </h4>
            <div>
              {enrolledCourses.map((cart, idx) => (
                <DashboardHomeCourseVerticalCard key={idx} cart={cart} />
              ))}
            </div>
          </div>
        )}

        <div>
          <Charts />
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="border border-gray-200 rounded-xl p-3 flex flex-col gap-5">
            <div className="flex items-center gap-2 justify-center">
              <PencilRulerIcon size={32} className="text-primary" />
              <h4 className="text-primary font-bold text-xl">Assignment</h4>
            </div>
            <div className="flex items-center justify-center gap-5">
              {" "}
              <p className="font-bold">
                Pending: <span className="text-primary text-xl">10</span>
              </p>
              <p className="font-bold">
                Submitted: <span className="text-primary text-xl">10</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3 flex flex-col gap-5">
            <div className="flex items-center gap-2 justify-center">
              <UserCheckIcon size={32} className="text-primary" />
              <h4 className="text-primary font-bold text-xl">Attendence</h4>
            </div>
            <div className="flex items-center justify-center gap-5">
              {" "}
              <p className="font-bold">
                Total Class: <span className="text-primary text-xl">10</span>
              </p>
              <p className="font-bold">
                Present: <span className="text-primary text-xl">10</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid mt-5">
        <div>
          <Calendar />
          {/* <BigCalendar /> */}
        </div>
      </div>
    </div>
  );
}

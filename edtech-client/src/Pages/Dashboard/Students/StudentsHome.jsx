import Calendar from "../../../Components/UI/Calendar/Calendar";

import order from "../../../assets/images/order-now.png";

import useGetOrders from "../../../Hooks/Students/useGetOrders";

import { Fade } from "react-awesome-reveal";
import DashboardHomeCourseCard from "../../../Components/UI/DashboardHomeCourseCard/DashboardHomeCourseCard";
import useEnrolledCourses from "../../../Hooks/Students/useEnrolledCourses";

export default function StudentsHome() {
  // const { orders } = useGetOrders();
  const { enrolled } = useEnrolledCourses();
  const enrolledCourses = enrolled[0]?.carts;

  // // console.log(enrolledCourses?.map((order) => // console.log(order.carts)));
  return (
    <div className="grid grid-cols-2 place-content-center gap-5">
      <div className="flex flex-col gap-10">
        <Fade direction="up" cascade={true} duration={800}>
          <h2 className="text-[45px] font-bold">
            <span className="text-primary">Dashboard</span>
          </h2>
        </Fade>
        {enrolledCourses?.length > 0 && (
          <div>
            <h4 className="font-bold text-xl mb-5">
              <span className="text-primary">Enrolled</span> Courses
            </h4>
            <div className="overflow-y-scroll h-[30vh]">
              <div className="grid grid-cols-3 gap-5">
                {enrolledCourses.map((cart, idx) => (
                  <DashboardHomeCourseCard key={idx} cart={cart} />
                ))}
              </div>
            </div>
          </div>
        )}
        <ul>
          <li>Marks</li>
          <li>Assignment Submitted</li>
          <li>Class Attendence</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

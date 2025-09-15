import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
// import useGetAllUsers from "../../../Hooks/Users/useGetAllUsers";
import TeacherDetails from "./TeacherProfile/TeacherDetails";
import { Fade } from "react-awesome-reveal";
import Calendar from "../../../Components/UI/Calendar/Calendar";
export default function TeachersHome() {
  // const { singleUser } = useGetAllUsers();

  return (
    <div>
      {/* {singleUser?.role === "teacher" && <TeacherDetails />} */}
      {/* <DashboardSectionTitle /> */}

      <div className="grid grid-cols-2 place-content-center gap-5">
        <div className="flex flex-col gap-10">
          <Fade direction="up" cascade={true} duration={800}>
            <h2 className="text-[45px] font-bold">
              <span className="text-primary">Dashboard</span>
            </h2>
          </Fade>

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
    </div>
  );
}

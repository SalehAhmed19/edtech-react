import DashboardSectionTitle from "../../../Components/SectionTitle/DashboardSectionTitle";
import useGetAllUsers from "../../../Hooks/Users/useGetAllUsers";
import TeacherDetails from "./TeacherProfile/TeacherDetails";

export default function TeachersHome() {
  const { singleUser } = useGetAllUsers();

  return (
    <div>
      {singleUser?.role === "teacher" && <TeacherDetails />}
      <DashboardSectionTitle />
    </div>
  );
}

// import { GrUpdate } from "react-icons/gr";

// import DashboardSectionTitle from "../../../../Components/SectionTitle/DashboardSectionTitle";
import DividerTwo from "../../../../Components/UI/DividerTwo";
import useGetAllUsers from "../../../../Hooks/Users/useGetAllUsers";
import StudentsDetails from "./StudentsDetails";

import StudentsDetailsForm from "./StudentsDetailsForm";
// import Modal from "../../../../Components/UI/Modals/Modal";
// import useModal from "../../../../Hooks/useModal";

export default function StudentsProfile() {
  const { singleUser } = useGetAllUsers();

  return (
    <div className="flex flex-col gap-10">
      {singleUser.role === "student" && <StudentsDetails />}
      <DividerTwo text={"Update Information"} />
      <div className="mb-10">
        <StudentsDetailsForm />
      </div>
    </div>
  );
}

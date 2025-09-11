// import { GrUpdate } from "react-icons/gr";

// import DashboardSectionTitle from "../../../../Components/SectionTitle/DashboardSectionTitle";
import DividerTwo from "../../../../Components/UI/DividerTwo";
import useGetAllUsers from "../../../../Hooks/Users/useGetAllUsers";
import HelpBanner from "../../HelpBanner";
import StudentsDetails from "./StudentsDetails";

import StudentsDetailsForm from "./StudentsDetailsForm";
// import Modal from "../../../../Components/UI/Modals/Modal";
// import useModal from "../../../../Hooks/useModal";

export default function StudentsProfile() {
  const { singleUser } = useGetAllUsers();

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {singleUser.role === "student" && <StudentsDetails />}
        {/* <DividerTwo text={"Update Information"} /> */}
        <div className="p-5 bg-gray-50 rounded-xl">
          <StudentsDetailsForm />
        </div>
      </div>
      <HelpBanner />
    </>
  );
}

// import { GrUpdate } from "react-icons/gr";

// import DashboardSectionTitle from "../../../../Components/SectionTitle/DashboardSectionTitle";
import DividerTwo from "../../../../Components/UI/DividerTwo";
import StudentsDetails from "./StudentsDetails";
import StudentsDetailsForm from "./StudentsDetailsForm";
// import Modal from "../../../../Components/UI/Modals/Modal";
// import useModal from "../../../../Hooks/useModal";

export default function StudentsProfile() {
  // const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className="flex flex-col gap-10">
      <StudentsDetails />

      <DividerTwo text={"Update Information"} />
      <div className="mb-10">
        <StudentsDetailsForm />
      </div>
    </div>
  );
}

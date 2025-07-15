import { GrUpdate } from "react-icons/gr";

import DashboardSectionTitle from "../../../../Components/SectionTitle/DashboardSectionTitle";
import StudentsDetails from "./StudentsDetails";
import StudentsDetailsForm from "./StudentsDetailsForm";
import Modal from "../../../../Components/UI/Modals/Modal";
import useModal from "../../../../Hooks/useModal";

export default function StudentsProfile() {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <div className="flex flex-col gap-5">
      <DashboardSectionTitle title={"My Profile"} />
      <hr className="border-dashed border-slate-300" />

      <StudentsDetails />

      <hr className="border-dashed border-slate-300" />

      <button
        onClick={handleOpenModal}
        className="p-5 rounded-2xl border border-dashed border-slate-300 w-1/2 mx-auto hover:bg-slate-300 duration-500 flex justify-center items-center gap-3"
      >
        <GrUpdate className="animate-spin" />
        Update Profile
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Free Booking Now"
      >
        <StudentsDetailsForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}

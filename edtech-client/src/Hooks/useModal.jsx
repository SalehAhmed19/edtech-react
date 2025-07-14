import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return {
    handleOpenModal,
    handleCloseModal,
    isModalOpen: isModalOpen,
    setIsModalOpen,
  };
}

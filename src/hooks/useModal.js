import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };
  return [isOpen, openModal, closeModal];
};

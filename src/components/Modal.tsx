import React from "react";
import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";
import { XCircleIcon } from "@heroicons/react/24/solid";
const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]"
        >
          <XCircleIcon className="h-6 w-6" />
        </button>
      </>
    </MuiModal>
  );
};

export default Modal;

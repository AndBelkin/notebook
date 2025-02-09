import { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";
import ReactModal from "react-modal";
import "./Modal.css";
import Button from "../button/Button";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onExit: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onExit }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onExit}
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      <Button type="icon" afterIcon={<IoCloseOutline />} onClick={onExit} className="modal-btn" />
      <div className="modal-conyent">{children}</div>
    </ReactModal>
  );
};

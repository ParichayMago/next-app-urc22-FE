import React from "react";
import { Button } from "./button";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  message?: string;
  buttonMessage1?: string;
  buttonMessage2?: string;
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  message,
  buttonMessage1
}) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: open ? "rgba(0, 0, 0, 0.5)" : "transparent" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal content */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-1/2 md:w-1/3 lg:w-1/4"
        onClick={(e) => e.stopPropagation()}
      >
        {message && (
          <div className="text-center mb-4 text-lg text-black font-semibold">
            {message}
          </div>
        )}
        {/* Children of the modal (e.g., form, buttons) */}
        {children}

        {/* Close button */}
        <div className=" text-center mt-4">
          {buttonMessage1 && (
            <Button className="mx-2" onClick={onClose}>
              {buttonMessage1}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

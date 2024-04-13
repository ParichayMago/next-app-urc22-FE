"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";

interface BookModalProps {
  message: string;
  buttonMessage?: string; // buttonMessage can be optional
}

const BookModel: React.FC<BookModalProps> = ({ message, buttonMessage }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <main>
      {buttonMessage && (
        <div className="p-5 flex justify-center bg-blue">
          <Button
            onClick={() => setOpen(true)}
            className="btn glass bg-grey text-white border rounded-full p-2 dark:md:hover:bg-fuchsia-600"
          >
            {buttonMessage}
          </Button>
        </div>
      )}
      <Modal open={open} onClose={() => setOpen(false) }>
        <div className="flex-col justify-center items-center font-bold">
          <div>{message}</div>
          <Button className="mt-5" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default BookModel;


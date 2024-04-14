"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import axios from "axios";

interface BookModalProps {
  message: string;
  buttonMessage?: string; // buttonMessage can be optional
  date: Date,
  time: string
  email: string
}

const BookModel: React.FC<BookModalProps> = ({ message, buttonMessage, time, date, email  }) => {

  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const [open, setOpen] = useState<boolean>(false);

  const onSubmit = ()=> {
    try {
      const response = axios.post(`${apiEndpoint}/api/appointments`, {email, time, date})
      
    } catch (error) {
      
    }
  }

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
      <Modal  open={open} onClose={() => setOpen(false) }>
        <div className="flex-col justify-center items-center font-bold">
          <div>{message}</div>
        </div>
      </Modal>
    </main>
  );
};

export default BookModel;


"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import axios from "axios";
import { formatDate } from "@/lib/utils";

interface BookModalProps {
  buttonMessage?: string;
  date: Date;
  time: string;
  email: string | null;
}

const BookModal: React.FC<BookModalProps> = ({
  buttonMessage,
  date,
  time,
  email,
}) => {
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [available, setAvailable] = useState<boolean>(true);

  // Function to update the appointment
  const handleUpdateAppointment = async () => {
    const formattedDate = formatDate(date);
    try {
      // Make the axios request to update the appointment
      const response = await axios.put(
        `${apiEndpoint}/api/appointments/updateAppointment`,
        {
          email,
          date: formattedDate,
          time,
        }
      );

      // Handle server response
      setMessage(response.data.message);
      setOpen(true);
    } catch (error) {
      handleError(error);
    }
  };

  // Function to handle the submission of the appointment
  const handleSubmit = async () => {
    const formattedDate = formatDate(date);
    try {
      // Make the axios request to book the appointment
      const response = await axios.post(
        `${apiEndpoint}/api/appointments/postAppointments`,
        {
          email,
          date: formattedDate,
          time,
        }
      );

      // Handle server response
      setMessage(response.data.message);
      setAvailable(response.data.available);
      setOpen(true);
    } catch (error) {
      handleError(error);
    }
  };

  // Function to handle errors and update message
  const handleError = (error) => {
    if (axios.isAxiosError(error)) {
      console.error("Axios error occurred:", error);

      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);

        // Update the message from the server
        setMessage(error.response.data.message);
        setAvailable(error.response.data.available);
      } else {
        console.error("No response received:", error.message);
        setMessage("No response received. Try again later.");
      }
    } else {
      console.error("Unexpected error occurred:", error);
      setMessage("Unexpected error. Try again later.");
    }

    setOpen(true);
  };

  return (
    <>
      {/* Button to open the modal */}
      {buttonMessage && (
        <div className="p-5 flex justify-center">
          <Button
            onClick={handleSubmit}
            className="bg-gray-50 border rounded-full p-2 dark:hover:bg-fuchsia-600 text-black hover:text-white"
          >
            {buttonMessage}
          </Button>
        </div>
      )}

      {/* Conditionally render the modal based on the 'open' state */}
      {open && (
        <Modal open={open} onClose={() => setOpen(false)} message={message}>
          {available ? (
            <Button onClick={() => setOpen(false)}>Close</Button>
          ) : (
            <div className="flex justify-center space-x-4">
              <Button onClick={() => setOpen(false)}>No</Button>
              <Button onClick={handleUpdateAppointment}>Yes</Button>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default BookModal;

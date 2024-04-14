"use client";
import React, { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

interface DateSclectorType{
  currentDate: any,
  setCurrentDate: any
}

export default function DateSelector({currentDate, setCurrentDate}:DateSclectorType) {

  // Function to handle clicking on the left arrow
  const handlePreviousDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  // Function to handle clicking on the right arrow
  const handleNextDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  // Function to get formatted date information
  const getDateInfo = (date: Date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthName = monthNames[date.getMonth()];
    const dateIndex = date.getDate();
    const dayName = dayNames[date.getDay()];

    return { monthName, dateIndex, dayName };
  };

  // Get the date information from the current date state variable
  const { monthName, dateIndex, dayName } = getDateInfo(currentDate);

  return (
    <main>
      <div className="flex justify-center w-">
        <div className="flex border p-7 mt-10 rounded-lg w-30">
          <div className="flex-col text-[#cbd5e1] justify-center text-center text-bold">
            <div className="mb-5 text-2xl">Select Date</div>
            <div className="flex items-center justify-center">
              {/* Left arrow button */}
              <ArrowLeftCircleIcon
                className="h-8 w-8 bg-black mx-2 rounded-full cursor-pointer"
                onClick={handlePreviousDate}
              />

              {/* Display the date information */}
              <div className="mx-4">
                <div>{`${dateIndex} ${monthName}`}</div>
                <div>{dayName}</div>
              </div>

              {/* Right arrow button */}
              <ArrowRightCircleIcon
                className="h-8 w-8 bg-black mx-2 rounded-full cursor-pointer"
                onClick={handleNextDate}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

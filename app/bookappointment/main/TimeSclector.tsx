"use client";
import React, { useState } from "react";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";

export default function TimeSelector() {
  // List of times to navigate through
  const timeData = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
  ];

  // State variable to keep track of the current time index
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);

  // Function to navigate to the previous time
  const previousTime = () => {
    // Decrement the current time index, and wrap around if necessary
    setCurrentTimeIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : timeData.length - 1));
  };

  // Function to navigate to the next time
  const nextTime = () => {
    // Increment the current time index, and wrap around if necessary
    setCurrentTimeIndex((prevIndex) => (prevIndex < timeData.length - 1 ? prevIndex + 1 : 0));
  };

  // Current time to display based on the current index
  const currentTime = timeData[currentTimeIndex];

  return (
    <main>
      <div className="flex justify-center">
        <div className="flex border p-7 mt-10 rounded-lg">
          <div className="flex-col text-[#cbd5e1] justify-center text-center text-bold">
            <div className="mb-5 text-2xl">Select Time</div>
            <div className="flex items-center justify-center">
              {/* Left arrow button */}
              <ArrowLeftCircleIcon
                className="h-8 w-8 bg-black mx-2 rounded-full cursor-pointer"
                onClick={previousTime}
              />
              {/* Display the current time */}
              <div className="mx-4">
                {currentTime}
              </div>

              {/* Right arrow button */}
              <ArrowRightCircleIcon
                className="h-8 w-8 bg-black mx-2 rounded-full cursor-pointer"
                onClick={nextTime}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

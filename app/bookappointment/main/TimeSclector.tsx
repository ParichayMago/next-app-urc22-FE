"use client";
import React, { useState, useCallback, useEffect } from "react";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

interface TimeSelectorProps {
  parentSetCurrentTime: (time: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ parentSetCurrentTime }) => {
  const timeData = [
    "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "1:00", "1:30", "2:00"
  ];

  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);

  // Use useEffect to update parent state whenever the current time changes
  useEffect(() => {
    parentSetCurrentTime(timeData[currentTimeIndex]);
  }, [currentTimeIndex, parentSetCurrentTime, timeData]);

  // Memoize navigation functions
  const previousTime = useCallback(() => {
    setCurrentTimeIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : timeData.length - 1));
  }, [timeData]);

  const nextTime = useCallback(() => {
    setCurrentTimeIndex((prevIndex) => (prevIndex < timeData.length - 1 ? prevIndex + 1 : 0));
  }, [timeData]);

  return (
    <main>
      <div className="flex justify-center">
        <div className="flex border p-7 mt-10 rounded-lg">
          <div className="flex-col text-[#cbd5e1] justify-center text-center text-bold">
            <div className="mb-5 text-2xl">Select Time</div>
            <div className="flex items-center justify-center">
              <ArrowLeftCircleIcon
                className="h-8 w-8 bg-black mx-2 rounded-full cursor-pointer"
                onClick={previousTime}
              />
              <div className="mx-4">{timeData[currentTimeIndex]}</div>
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
};

export default TimeSelector;

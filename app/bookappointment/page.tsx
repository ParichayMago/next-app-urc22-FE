"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./Header";
import DateSelector from "./main/DateSclector";
import TimeSelector from "./main/TimeSclector";
import BookModel from "./main/BookModel";
import SidebarApp from "./SidebarApp";

export default function Page() {
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<any>();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const route = useRouter();

  // Set the user email state on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("emailLS");
    setUserEmail(storedEmail);

    if (!storedEmail) {
      console.log("Email not found");
      route.push("/login");
    } else {
      console.log("User email found in booking app:", storedEmail);
    }
  }, [route]);

  return (
    <div className="flex w-screen h-screen bg-black">
      <div className="flex-basis-1/5 bg-color-white">
        <SidebarApp />
      </div>
      <div className="w-full h-full">
        <Header />
        <DateSelector currentDate={date} setCurrentDate={setDate} />
        <TimeSelector parentSetCurrentTime={setTime} />
        <BookModel
          buttonMessage="Book Appointment"
          time={time}
          date={date}
          email={userEmail}
        />
      </div>
    </div>
  );
}

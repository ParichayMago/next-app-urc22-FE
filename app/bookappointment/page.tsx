"use client";

import React, { PureComponent, useEffect, useState } from "react";
import { Header } from "./Header";
import DateSelector from "./main/DateSclector";
import TimeSelector from "./main/TimeSclector";
import BookModel from "./main/BookModel";
import { useRouter } from "next/navigation";
import SidebarApp from "./SidebarApp";

export default function page() {
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<any>();

  const route = useRouter();
  let userEmail:string = "";

  useEffect(() => {
    userEmail = localStorage.getItem("emailLS");
    if (!userEmail) {
      route.push("/login");
    }
  }, []);
  return (
    <div className="flex w-screen h-screen bg-black ">
      <div className="flex-basis-1/5 bg-color-white">
        <SidebarApp />
      </div>
      <div className="w-full h-full">
        <Header />
        <DateSelector currentDate={date} setCurrentDate={setDate} />
        <TimeSelector parentSetCurrentTime={setTime} />
        <BookModel
          message="Appointment has been made"
          buttonMessage="Book Appointment"
          time={time}
          date={date}
          email = {userEmail}
        />
      </div>
    </div>
  );
}

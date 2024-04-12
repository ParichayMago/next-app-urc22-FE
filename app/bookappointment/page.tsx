import React, { PureComponent } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import DateSelector from "./main/DateSclector";

export default function page() {
  return (
    <div className="flex w-screen h-screen bg-black">
      <div className="flex-basis-1/5 bg-color-white">
        <Sidebar />
      </div>
      <div className="w-full h-full">
        <Header />
        <DateSelector />
      </div>
    </div>
  );
}

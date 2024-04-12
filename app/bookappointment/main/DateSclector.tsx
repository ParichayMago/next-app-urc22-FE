'use client'
import React, {useEffect, useState} from "react";

export default function DateSelector() {

  // const currentDate = new Date()
  
  // const [month, selectoMonth] = useState("null")
  // const [date, selectDate] = useState("null")
  // const [day, selectDay] = useState("null")
  
  // useEffect(()=> {
  //   const {monthName, dateIndex, dayName} = handleDates(currentDate)
    

  // })

  return(
    <main>
      <div className="grid grid-cols-3 items-center  justify-center color-red text-bold">
        <div></div>
        <div className="grid grid-start-2 border p-7 w-full mt-10 place-items-center rounded-lg">
          <div className="mb-5 text-2xl">
            Select Date
          </div>
          <div className="">
            12 April
          </div>
          <div className="">
            Tuesday
          </div>
        </div>
      </div>
  </main>
  )
}

function handleDates(date: Date) {

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = [
    'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'
  ]

  const monthIndex = date.getMonth(); // Get the month index (0-11)
  const monthName = monthNames[monthIndex]; // Retrieve the month name using the index

  const dateIndex = date.getDate()

  const dayIndex = date.getDay();
  const dayName = dayNames[dayIndex];

  return {monthName, dateIndex, dayName}
}
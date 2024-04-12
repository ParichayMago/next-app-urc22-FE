'use client'
// import { AiFillCaretLeft } from "react-icons/ai";
import React, {useEffect, useState} from "react";
// import { IconContext } from "react-icons";
// import { ArrowRightCircle } from "lucide-react";
import { ArrowRightCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/solid'

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
    <div className="items-center justify-center color-red text-bold">
    <div className="flex place-items-center justify-center">
      <div className="flex border p-7 mt-10 rounded-lg place-items-center ">
          <ArrowLeftCircleIcon className="h-6 w-6 bg-white mx-2 rounded-full" />
        <div className="flex-col text-[#cbd5e1] justify-center text-center">
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
        <ArrowRightCircleIcon onClick={()=> console.log('hellow orld')} className="h-6 w-6 bg-white mx-2 rounded-full" />
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
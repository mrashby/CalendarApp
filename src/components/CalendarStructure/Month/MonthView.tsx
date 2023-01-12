import React from "react";
import "./MonthView.css";

import ColumnGrid from "./ColumnGrid";

const MonthView = () => {
  // set current date to var in case I reuse it
  const currentDate: Date = new Date();

  const months: string[] = [
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

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentMonth: string = months[currentDate.getMonth()];

  return (
    <div className='month-grid'>
      <div className='month'>{currentMonth}</div>
        <ColumnGrid days={days} />
    </div>
  );
};

export default MonthView;

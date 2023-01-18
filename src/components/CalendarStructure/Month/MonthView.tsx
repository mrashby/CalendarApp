import React, { useState } from "react";
import "./MonthView.css";

import ColumnGrid from "./ColumnGrid";
import MonthHeader from "./MonthHeader";

const MonthView = () => {

  const months: { value: string, id: number}[] = [
    { value: "January", id: 0 },
    { value: "February", id: 1 },
    { value: "March", id: 2 },
    { value: "April", id: 3 },
    { value: "May", id: 4 },
    { value: "June", id: 5 },
    { value: "July", id: 6 },
    { value: "August", id: 7 },
    { value: "September", id: 8 },
    { value: "October", id: 9 },
    { value: "November", id: 10 },
    { value: "December", id: 11 },
  ];

  // set current date to var in case I reuse it
  const currentDate: Date = new Date();

  const [selectedMonthId, setSelectedMonthId] = useState(months[currentDate.getMonth()].id);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  const selectedMonthHandler = (monthInput: number) => {
    let monthId = months[monthInput].id;
    setSelectedMonthId(monthId);
  };

  const selectedYearHandler = (yearInput: number) => {
    let year = yearInput;
    setSelectedYear(year);
  };

  return (
    <div className='month-grid'>
      <MonthHeader monthArray={months} selectedMonthHandler={selectedMonthHandler} selectedYearHandler={selectedYearHandler} />
      <ColumnGrid selectedMonthId={selectedMonthId} selectedYear={selectedYear} />
    </div>
  );
};

export default MonthView;

import React from "react";
import DayBox from "./DayBox";

interface props {
  day: string;
}

const getCurrentMonth = new Date().getMonth();
console.log(getCurrentMonth);


// calculate total number of days, start on proper weekday, populate grid...
// const findNumberOfDays = '';


const DayColumn = ({ day }: props) => {

  return (
    <li className='weekday'>
      <div className='weekday-header'>{day}</div>
      <DayBox />
    </li>
  );
};

export default DayColumn;

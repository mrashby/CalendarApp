import React from "react";

interface props {
    day: string;
  }

const DayHeader = ({day}: props) => {

  return (
    <div className='weekday-header'>{day}</div>
  );
};

export default DayHeader;

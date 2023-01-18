import React from "react";

interface props {
  dayValue: number;
  currentMonth: boolean;
}

const DayBox = ({ dayValue, currentMonth }: props) => {

  return (
    <div>
      {currentMonth ? (
        <div className='day-box'>
          <div className='day-text'>{dayValue}</div>
        </div>
      ) : (
        <div className='diff-day-box'>
          <div className='day-text'>{dayValue}</div>
        </div>
      )}
    </div>
  );
};

export default DayBox;

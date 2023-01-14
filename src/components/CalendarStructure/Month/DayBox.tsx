import React from "react";

interface props {
  dayValue: number;
  boxClass: boolean;
}

const DayBox = ({ dayValue, boxClass }: props) => {
  console.log(boxClass);

  return (
    <div>
      {boxClass ? (
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

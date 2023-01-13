import React from "react";

interface props {
  dayValue: number;
}

const DayBox = ({dayValue}: props) => {

  return (
      <div className='day-box'>
        <div className='day-text'>{dayValue}</div>
      </div>
  );
};

export default DayBox;

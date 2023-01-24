import React from "react";
import Events from "../../../CalendarEvents/Events";

import { DayBoxProps } from '../../../../structure/Data/interfaces'

const DayBox = ({ id, dayValue, month, year, currentMonth, today, selected, handleSelectedGridProperty }: DayBoxProps) => {

  // I think I can manage the state for 'selected' separately
  // leaving this here until I confirm
  // const [selectedBox, setSelectedBox] = useState(false);

  let divClass: string = '';

  if (selected === false) {
    if (currentMonth && today) {
      divClass = 'current-day-box';
    }
    else if (currentMonth) {
      divClass = 'day-box';
    }
    else {
      divClass = 'diff-day-box';
    }
  }

  if (selected === true) {
    divClass = 'selected-day-box';
  }

  const clickMe = (event: React.MouseEvent<HTMLElement>) => {
    // console.log(event.currentTarget);
    handleSelectedGridProperty(dayValue, currentMonth);
    console.log(id);
  }

  return (
    <div className={divClass} onClick={clickMe}>
      <div className='day-text'>{dayValue}</div>
      <Events id={id} year={year} month={month} day={dayValue}/>
    </div>
  );
};

export default DayBox;

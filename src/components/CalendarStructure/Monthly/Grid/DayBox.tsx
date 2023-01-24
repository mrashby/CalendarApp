import React from "react";
import Event from "../../../CalendarEvents/Event";

import { DayBoxProps } from '../../../../structure/Data/interfaces'

const DayBox = ({ dayValue, currentMonth, today, selected, handleSelectedGridProperty }: DayBoxProps) => {

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
  }

  return (
    <div className={divClass} onClick={clickMe}>
      <div className='day-text'>{dayValue}</div>
      <Event />
    </div>
  );
};

export default DayBox;

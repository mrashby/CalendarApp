import React from "react";
import Event from "../../../CalendarEvents/Event";

import { DayBoxProps } from '../../../../structure/Data/interfaces'

const DayBox = ({ dayValue, currentMonth, today }: DayBoxProps) => {

  let divClass: string = '';

  if (currentMonth && today) {
    divClass = 'selected-day-box';
  }
  else if (currentMonth) {
    divClass = 'day-box';
  }
  else {
    divClass = 'diff-day-box';
  }

  return (
    <div className={divClass}>
      <div className='day-text'>{dayValue}</div>
      <Event />
    </div>
  );
};

export default DayBox;

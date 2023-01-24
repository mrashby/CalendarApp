import React from "react";
import DayHeader from "./DayHeader";
import DayBox from "./DayBox";

import { DayColumnProps, DayColumn_CalculateDateGridProps } from '../../../../structure/Data/interfaces'

const DayColumn = ({ day, id, setDate, generatedMonthGrid, setSelectProperty }: DayColumnProps) => {

  const handleSelectedGridProperty = (date: number, current: boolean) => {
    // console.log(`Date is ${date}, Current is ${current}`);
    setSelectProperty(date, current);
  };


  // function to assign dates to relevant day column
  const calculateDateGrid = ( gridInput: DayColumn_CalculateDateGridProps ) => {

    let dayOfMonth: Date = new Date(setDate.getFullYear(), gridInput.month, gridInput.dateInput);
    let weekdayNumber: number = dayOfMonth.getDay();

    // matching the day of month to the column header
    if (weekdayNumber === id) {
        return <DayBox key={gridInput.itemId} dayValue={gridInput.dateInput} currentMonth={gridInput.currentMonth} 
          today={gridInput.today} selected={gridInput.selected} handleSelectedGridProperty={handleSelectedGridProperty}/>
      };
    };

  return (
    <li className='weekday'>
      <DayHeader day={day}/>
      { generatedMonthGrid.map(x => 
        calculateDateGrid({ dateInput: x.value, itemId: x.id, month: x.month, currentMonth: x.currentMonth, today: x.today, selected: x.selected })
      )}
    </li>
  );
};

export default DayColumn;

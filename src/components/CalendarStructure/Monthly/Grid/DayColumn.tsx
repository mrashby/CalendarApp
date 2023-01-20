import React from "react";
import DayHeader from "./DayHeader";
import DayBox from "./DayBox";

import { DayColumnProps, DayColumn_CalculateDateGridProps } from '../../../../structure/Data/interfaces'

const DayColumn = ({ day, id, selectedMonthId, selectedYear }: DayColumnProps) => {

  // hardcoded the year + month value temporarily
  let yearValue: number = selectedYear;
  let monthValue: number = selectedMonthId; 

  // declaring variables to highlight the current date on the calendar
  let thisYear: number = new Date().getFullYear();
  let thisMonth: number = new Date().getMonth();
  let thisDate: number = new Date().getDate();

  // creating a default date value for the input year + month
  let setDate: Date = new Date(yearValue, monthValue);

  // calculate number of days in the month
  let numberOfDaysInMonth: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDate();

  // declare main array
  let numberOfDaysArray: { value: number, id: number, month: number, currentMonth: boolean, today: boolean }[] = [];

  // use array to trigger function number of times equal to the days in the month
  for ( let x: number = 1; x <= numberOfDaysInMonth; x++ ) {

    let idNumber: string = `${monthValue}.${x}`;

    // identify the current day, pass to DayBox component
    switch (thisYear === yearValue && thisMonth === monthValue && thisDate === x) {
      case true:
        numberOfDaysArray.push({ value: x, id: +idNumber, month: monthValue, currentMonth: true, today: true });
        break;
      default:
        numberOfDaysArray.push({ value: x, id: +idNumber, month: monthValue, currentMonth: true, today: false });
        break;
    };
  };

  // fill in blocks if the first day of the month is not Sunday (first grid column)
  let firstDayOfMonth: number = new Date(setDate.getFullYear(), setDate.getMonth(), 1).getDay();

  for ( let x: number = 0; x > -firstDayOfMonth; x-- ) {

    let getPreviousDate: number = new Date(setDate.getFullYear(), setDate.getMonth(), x).getDate();
    let previousMonth: number = monthValue - 1;
    let idNumber: string = `${previousMonth}.${getPreviousDate}`
    
    numberOfDaysArray.unshift({ value: getPreviousDate, id: +idNumber, month: previousMonth, currentMonth: false, today: false});
  };

  // fill in blocks if the last day of the month is not Saturday (last grid column)
  let lastDayOfMonth: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDay();
  // needed another increment within this loop
  let inc: number = 1;

  for ( let x: number = 6; x > lastDayOfMonth; x-- ) {
    let getNextDate: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, inc).getDate();
    let nextMonth: number = monthValue + 1;
    let idNumber: string = `${nextMonth}.${getNextDate}`
    
    numberOfDaysArray.push({ value: getNextDate, id: +idNumber, month: nextMonth, currentMonth: false, today: false});
    inc++;
  };

  // function to assign dates to relevant day column
  const calculateDateGrid = ( gridInput: DayColumn_CalculateDateGridProps ) => {

    let dayOfMonth: Date = new Date(setDate.getFullYear(), gridInput.month, gridInput.dateInput);
    let weekdayNumber: number = dayOfMonth.getDay();

    // matching the day of month to the column header
    if (weekdayNumber === id) {
        return <DayBox key={gridInput.itemId} dayValue={gridInput.dateInput} currentMonth={gridInput.currentMonth} today={gridInput.today}/>
      };
    };

  return (
    <li className='weekday'>
      <DayHeader day={day}/>
      { numberOfDaysArray.map(x => 
        calculateDateGrid({ dateInput: x.value, itemId: x.id, month: x.month, currentMonth: x.currentMonth, today: x.today })
      )}
    </li>
  );
};

export default DayColumn;

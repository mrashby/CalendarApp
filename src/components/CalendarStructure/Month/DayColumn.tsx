import React from "react";
import DayHeader from "./DayHeader";
import DayBox from "./DayBox";

interface props {
  day: string;
  id: number;
  selectedMonthId: number;
  selectedYear: number;
}

const DayColumn = ({ day, id, selectedMonthId, selectedYear }: props) => {

  // hardcoded the year + month value temporarily
  let yearValue: number = selectedYear;
  let monthValue: number = selectedMonthId; 

  // creating a default date value for the input year + month
  let setDate: Date = new Date(yearValue, monthValue);

  // calculate number of days in the month
  let numberOfDaysInMonth: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDate();

  // declare main array
  let numberOfDaysArray: { value: number, id: number, month: number, currentMonth: boolean}[] = [];

  // use array to trigger function number of times equal to the days in the month
  for ( let x: number = 1; x <= numberOfDaysInMonth; x++ ) {
    let idNumber: string = `${monthValue}.${x}`
    numberOfDaysArray.push({ value: x, id: +idNumber, month: monthValue, currentMonth: true });
  };

  // fill in blocks if the first day of the month is not Sunday (first grid column)
  let firstDayOfMonth: number = new Date(setDate.getFullYear(), setDate.getMonth(), 1).getDay();

  for ( let x: number = 0; x > -firstDayOfMonth; x-- ) {

    let getPreviousDate: number = new Date(setDate.getFullYear(), setDate.getMonth(), x).getDate();
    let previousMonth: number = monthValue - 1;
    let idNumber: string = `${previousMonth}.${getPreviousDate}`
    
    numberOfDaysArray.unshift({ value: getPreviousDate, id: +idNumber, month: previousMonth, currentMonth: false});
  };

  // fill in blocks if the last day of the month is not Saturday (last grid column)
  let lastDayOfMonth: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDay();
  // needed another increment within this loop
  let inc: number = 1;

  for ( let x: number = 6; x > lastDayOfMonth; x-- ) {
    let getNextDate: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, inc).getDate();
    let nextMonth: number = monthValue + 1;
    let idNumber: string = `${nextMonth}.${getNextDate}`
    
    numberOfDaysArray.push({ value: getNextDate, id: +idNumber, month: nextMonth, currentMonth: false});
    inc++;
  };

  // function to assign dates to relevant day column
  const calculateDateGrid = (dateInput: number, itemId: number, month: number, currentMonth: boolean) => {

    let dayOfMonth: Date = new Date(setDate.getFullYear(), month, dateInput);
    let weekdayNumber: number = dayOfMonth.getDay();

    // matching the day of month to the column header
    if (weekdayNumber === id) {
        return <DayBox key={itemId} dayValue={dateInput} currentMonth={currentMonth} />
      };
    };

  return (
    <li className='weekday'>
      <DayHeader day={day}/>
      { numberOfDaysArray.map(x => 
        calculateDateGrid(x.value, x.id, x.month, x.currentMonth)
      )}
    </li>
  );
};

export default DayColumn;

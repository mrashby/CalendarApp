import React, { useState, useEffect } from "react";
import "./styles.css";

import ColumnGrid from "./Grid/ColumnGrid";
import MonthHeader from "./Header/MonthHeader";

import { months } from '../../../structure/Data/data'

const MonthView = () => {

  /************** FUNCTIONS THAT MANAGE STATE ***************/

  // set month to selected dropdown value
  const selectedMonthHandler = (monthInput: number) => {
    let monthId = months[monthInput].id;
    setSelectedMonthId(monthId);
  };

  // set year to selected dropdown value
  const selectedYearHandler = (yearInput: number) => {
    let year = yearInput;
    setSelectedYear(year);
  };

  // increase month by one
  // included logic to increase the year when going from Dec -> Jan
  const increaseMonthHandler = () => {
    setSelectedMonthId(prevMonthId => {
      let monthId = prevMonthId + 1;
      if (monthId === 12) {
        setSelectedYear(prevYear => {
          let year = prevYear + 1;
          return year;
        })
        return 0;
      }
      else {
        return monthId;
      }
    })
  };

  // decrease month by one
  // included logic to decrease the year when going from Jan -> Dec
  const decreaseMonthHandler = () => {
    setSelectedMonthId(prevMonthId => {
      let monthId = prevMonthId - 1;
      if (monthId === -1) {
        setSelectedYear(prevYear => {
          let year = prevYear - 1;
          return year;
        })
        return 11;
      }
      else {
        return monthId;
      }
    })
  };

  // today button logic
  const setToday = () => {
    setSelectedMonthId(months[currentDate.getMonth()].id);
    setSelectedYear(currentDate.getFullYear());
  }

  /************** DECLARING STATE VARIABLES MONTH/YEAR ***************/

  // set current date to var
  const currentDate: Date = new Date();

  // month + year useState to update date grid
  const [selectedMonthId, setSelectedMonthId] = useState(months[currentDate.getMonth()].id);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  /************** GENERATE DATE ARRAY USING STATE ***************/

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
  let numberOfDaysArray: { value: number, id: number, month: number, currentMonth: boolean, today: boolean, selected: boolean }[] = [];

  // use array to trigger function number of times equal to the days in the month
  for ( let x: number = 1; x <= numberOfDaysInMonth; x++ ) {
    let idNumber: string = `${monthValue}.${x}`;

    // identify the current day, pass to DayBox component
    switch (thisYear === yearValue && thisMonth === monthValue && thisDate === x) {
      case true:
        numberOfDaysArray.push({ value: x, id: +idNumber, month: monthValue, currentMonth: true, today: true, selected: false });
        break;
      default:
        numberOfDaysArray.push({ value: x, id: +idNumber, month: monthValue, currentMonth: true, today: false, selected: false });
        break;
    };
  };

  // fill in blocks if the first day of the month is not Sunday (first grid column)
  let firstDayOfMonth: number = new Date(setDate.getFullYear(), setDate.getMonth(), 1).getDay();

  for ( let x: number = 0; x > -firstDayOfMonth; x-- ) {

    let getPreviousDate: number = new Date(setDate.getFullYear(), setDate.getMonth(), x).getDate();
    let previousMonth: number = monthValue - 1;
    let idNumber: string = `${previousMonth}.${getPreviousDate}`
    
    numberOfDaysArray.unshift({ value: getPreviousDate, id: +idNumber, month: previousMonth, currentMonth: false, today: false, selected: false });
  };

  // fill in blocks if the last day of the month is not Saturday (last grid column)
  let lastDayOfMonth: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDay();
  // needed another increment within this loop
  let inc: number = 1;

  for ( let x: number = 6; x > lastDayOfMonth; x-- ) {
    let getNextDate: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, inc).getDate();
    let nextMonth: number = monthValue + 1;
    let idNumber: string = `${nextMonth}.${getNextDate}`
    
    numberOfDaysArray.push({ value: getNextDate, id: +idNumber, month: nextMonth, currentMonth: false, today: false, selected: false });
    inc++;
  };

  /************** DECLARING STATE / EFFECT FOR VARIABLE GRID ***************/

  const [generatedMonthGrid, setGeneratedMonthGrid] = useState(numberOfDaysArray);

  // update grid when month/year change
  useEffect(() => {
    setGeneratedMonthGrid(numberOfDaysArray);

    // disabling the error using the line below. I don't like doing this, fix later.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedMonthId, selectedYear]);


  /************** FUNCTION THAT MANAGES GRID STATE ***************/

  // logic to handle selected (highlighted) day
  const setSelectProperty = (date: number, current: boolean) => {
    let newArray: { value: number, id: number, month: number, currentMonth: boolean, today: boolean, selected: boolean }[] = [];
      for ( let x = 0; x < numberOfDaysArray.length; x++) {
        if (date === numberOfDaysArray[x].value && current === numberOfDaysArray[x].currentMonth) {
          newArray.push({ value: numberOfDaysArray[x].value, id: numberOfDaysArray[x].id, month: numberOfDaysArray[x].month, 
                          currentMonth: numberOfDaysArray[x].currentMonth, today: numberOfDaysArray[x].today, selected: true })
        }
        else {
          newArray.push({ value: numberOfDaysArray[x].value, id: numberOfDaysArray[x].id, month: numberOfDaysArray[x].month, 
                          currentMonth: numberOfDaysArray[x].currentMonth, today: numberOfDaysArray[x].today, selected: false })
        }
      }

      setGeneratedMonthGrid(newArray);
    };


  /***** OUTPUT ******/

  return (
    <div className='month-grid'>
      <MonthHeader monthArray={months} selectedMonthHandler={selectedMonthHandler} selectedMonthId={selectedMonthId}
        selectedYearHandler={selectedYearHandler} selectedYear={selectedYear} increaseMonthHandler={increaseMonthHandler} 
        decreaseMonthHandler={decreaseMonthHandler} setToday={setToday} />
      <ColumnGrid setDate={setDate} setSelectProperty={setSelectProperty} generatedMonthGrid={generatedMonthGrid} />
    </div>
  );
};

export default MonthView;

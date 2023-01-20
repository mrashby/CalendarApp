import React, { useState } from "react";
import "./styles.css";

import ColumnGrid from "./Grid/ColumnGrid";
import MonthHeader from "./Header/MonthHeader";

import { months } from '../../../structure/Data/data'

const MonthView = () => {

  // set current date to var in case I reuse it
  const currentDate: Date = new Date();

  // month + year useState to update date grid
  const [selectedMonthId, setSelectedMonthId] = useState(months[currentDate.getMonth()].id);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

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

  return (
    <div className='month-grid'>
      <MonthHeader monthArray={months} selectedMonthHandler={selectedMonthHandler} selectedMonthId={selectedMonthId}
        selectedYearHandler={selectedYearHandler} selectedYear={selectedYear} increaseMonthHandler={increaseMonthHandler} 
        decreaseMonthHandler={decreaseMonthHandler} />
      <ColumnGrid selectedMonthId={selectedMonthId} selectedYear={selectedYear} />
    </div>
  );
};

export default MonthView;

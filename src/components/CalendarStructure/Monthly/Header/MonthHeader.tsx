import React from "react";

import DateSelectors from './DateSelectors';

import { MonthHeaderProps } from '../../../../structure/Data/interfaces'

// unsure if I actually want selectedMonth passed...
// will use for default select option later
const MonthHeader = (props: MonthHeaderProps) => {

  const yearSelectorArray: number[] = [];

  // hardcoding year range to 10 years past/future
  let yearMin: number = props.selectedYear - 10;
  let yearMax: number = props.selectedYear + 10;

  for (let x = yearMin; x <= yearMax; x++) {
    yearSelectorArray.push(x);
  };

  const updateSelectedMonth = (monthId: number) => {
      props.selectedMonthHandler(monthId);
  };

  const updateSelectedYear = (year: number) => {
    props.selectedYearHandler(year);
  };

  const increaseMonth = () => {
    props.increaseMonthHandler();
  };

  const decreaseMonth = () => {
    props.decreaseMonthHandler();
  };

  return (
    <div className="header">
      <button className="change-month" type="button" onClick={decreaseMonth}>{'<'}</button>
      <DateSelectors updateSelectedMonth={updateSelectedMonth} selectedMonthId={props.selectedMonthId}
        updateSelectedYear={updateSelectedYear} selectedYear={props.selectedYear}
        monthArray={props.monthArray} yearSelectorArray={yearSelectorArray} />
      <button className="change-month" type="button" onClick={increaseMonth}>{'>'}</button>
    </div>
  );
};

export default MonthHeader;

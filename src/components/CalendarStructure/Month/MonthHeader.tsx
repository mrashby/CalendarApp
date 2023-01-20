import React from "react";

import MonthSelector from "./MonthSelector";
import YearSelector from "./YearSelector";

import { MonthHeaderProps } from '../../../structure/Data/interfaces'

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

  const updateSelectedMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
      let monthId: number = +event.target.value;
      props.selectedMonthHandler(monthId);
  };

  const updateSelectedYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let year = +event.target.value;
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
      <div className="date-selectors">
        <select className='selector' value={props.selectedMonthId} onChange={updateSelectedMonth}>
          { props.monthArray.map(month => 
            <MonthSelector key={month.id} id={month.id} name={month.value}/>
          )}
        </select>
        <select className="selector" value={props.selectedYear} onChange={updateSelectedYear}>
          { yearSelectorArray.map(year => 
            <YearSelector key={year} year={year} />
          )}
        </select>
      </div>
      <button className="change-month" type="button" onClick={increaseMonth}>{'>'}</button>
    </div>
  );
};

export default MonthHeader;

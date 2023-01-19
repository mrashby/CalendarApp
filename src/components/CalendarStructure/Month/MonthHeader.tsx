import React from "react";

import MonthSelector from "./MonthSelector";
import YearSelector from "./YearSelector";

interface props {
    monthArray: {value: string, id: number }[];
    selectedMonthHandler: Function;
    selectedYearHandler: Function;
  }

// unsure if I actually want selectedMonth passed...
// will use for default select option later
const MonthHeader = ({monthArray, selectedMonthHandler, selectedYearHandler}: props) => {

  const yearSelectorArray: number[] = [];

  let currentYear: number = new Date().getFullYear();
  // hardcoding year range to 10 years past/future
  let yearMin: number = currentYear - 10;
  let yearMax: number = currentYear + 10;

  for (let x = yearMin; x <= yearMax; x++) {
    yearSelectorArray.push(x);
  };

  const updateSelectedMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
      let monthId: number = +event.target.value;
      selectedMonthHandler(monthId);
  };

  const updateSelectedYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let year = +event.target.value;
    selectedYearHandler(year);
  };

  return (
    <div className="date-selectors">
      <select className='selector' onChange={updateSelectedMonth}>
        { monthArray.map(month => 
          <MonthSelector key={month.id} id={month.id} name={month.value}/>
            // <option className="option" key={month.id} value={month.id}>{month.value}</option>
        )}
      </select>
      <select className="selector" onChange={updateSelectedYear}>
        { yearSelectorArray.map(year => 
          <YearSelector key={year} year={year} />
        )}
      </select>
    </div>
  );
};

export default MonthHeader;

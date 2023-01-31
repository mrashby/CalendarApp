import React from "react";

import MonthSelector from "./MonthSelector";
import YearSelector from "./YearSelector";

import { Month } from '../../../../structure/Data/interfaces'

interface DateSelectorProps {
  monthArray: Month[];
  yearSelectorArray: number[];
  updateSelectedMonth: (monthId: number) => void;
  updateSelectedYear: (year: number) => void;
  selectedYear: number;
  selectedMonthId: number;
};

const DateSelectors = (props: DateSelectorProps) => {

    const updateSelectedMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(+event.target.value);
        let monthId: number = +event.target.value;
        props.updateSelectedMonth(monthId);
    }

    const updateSelectedYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(+event.target.value);
        let year: number = +event.target.value;
        props.updateSelectedYear(year);
    }

    return (
      <div>
        <select className='selector' value={props.selectedMonthId} onChange={updateSelectedMonth}>
          { props.monthArray.map(month => 
            <MonthSelector key={month.id} id={month.id} name={month.value}/>
          )}
        </select>
        <select className="selector" value={props.selectedYear} onChange={updateSelectedYear}>
          { props.yearSelectorArray.map(year => 
            <YearSelector key={year} year={year} />
          )}
        </select>
      </div>
    )
}

export default DateSelectors;

import React from "react";

interface props {
    selectedMonth: string;
    monthArray: {value: string, id: number }[];
    selectedMonthHandler: Function;
  }

// unsure if I actually want selectedMonth passed...
// will use for default select option later
const MonthHeader = ({selectedMonth, monthArray, selectedMonthHandler}: props) => {

    const updateSelectedMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(+event.target.value);
        let tempNumber: number = +event.target.value
        selectedMonthHandler(tempNumber);
    }

  return (
    <select className='month-header' onChange={updateSelectedMonth}>
        { monthArray.map(month => 
            <option key={month.id} value={month.id}>{month.value}</option>
        )};
    </select>
  );
};

export default MonthHeader;

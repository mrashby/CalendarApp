import React from "react";
import { GridArray } from "../../../../structure/Data/interfaces";

import DayColumn from './DayColumn';

interface ColumnGridProps {
  generatedMonthGrid: GridArray[];
  setDate: Date;
  setSelectProperty: Function;
};

// returns static Sun - Sat grid
const ColumnGrid = ({ setDate, setSelectProperty, generatedMonthGrid }: ColumnGridProps) => {

  const handleSelectProperty = (date: number, current: boolean) => {
    setSelectProperty(date, current);
  }

  const weekdays: { name: string, id: number }[] = [
    { name: "Sunday", id: 0},
    { name: "Monday", id: 1},
    { name: "Tuesday", id: 2},
    { name: "Wednesday", id: 3},
    { name: "Thursday", id: 4},
    { name: "Friday", id: 5},
    { name: "Saturday", id: 6},
  ];

  return (
    <ul className='weekdays'>
        {weekdays.map(day =>
            <DayColumn key={day.id} day={day.name} id={day.id} setDate={setDate} generatedMonthGrid={generatedMonthGrid} setSelectProperty={handleSelectProperty} />
        )}
    </ul>
  );
};

export default ColumnGrid;

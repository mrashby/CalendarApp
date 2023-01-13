import React from "react";
import DayColumn from './DayColumn';


// returns static Sun - Sat grid
const ColumnGrid = () => {

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
            <DayColumn key={day.id} day={day.name} id={day.id} />
        )}
    </ul>
  );
};

export default ColumnGrid;

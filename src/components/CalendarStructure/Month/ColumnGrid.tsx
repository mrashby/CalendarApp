import React from "react";
import DayColumn from './DayColumn';

interface props {
    days: string[],
}

// returns static Sun - Sat grid
const ColumnGrid = ({days}: props) => {

  return (
    <ul className='weekdays'>
        {days.map(day =>
            <DayColumn key={day} day={day} />
        )}
    </ul>
  );
};

export default ColumnGrid;

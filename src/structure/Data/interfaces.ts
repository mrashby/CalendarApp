export interface MonthHeaderProps {
    monthArray: {value: string, id: number }[];
    selectedMonthHandler: Function;
    selectedMonthId: number;
    selectedYearHandler: Function;
    selectedYear: number;
    increaseMonthHandler: Function;
    decreaseMonthHandler: Function;
};

export interface MonthSelectorProps {
    id: number,
    name: string,
};

export interface YearSelectorProps {
  year: number,
};

export interface ColumnGridProps {
  selectedMonthId: number;
  selectedYear: number;
}

export interface DayColumnProps {
    day: string;
    id: number;
    selectedMonthId: number;
    selectedYear: number;
  }

  export interface DayColumn_CalculateDateGridProps {
    dateInput: number;
    itemId: number; 
    month: number;
    currentMonth: boolean, 
    today: boolean,
  }
  
  export interface DayHeaderProps {
    day: string;
  }

  export interface DayBoxProps {
    dayValue: number;
    currentMonth: boolean;
    today: boolean;
  }
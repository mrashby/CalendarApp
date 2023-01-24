export interface MonthHeaderProps {
    monthArray: {value: string, id: number }[];
    selectedMonthHandler: Function;
    selectedMonthId: number;
    selectedYearHandler: Function;
    selectedYear: number;
    increaseMonthHandler: Function;
    decreaseMonthHandler: Function;
    setToday: Function;
};

export interface DateSelectorProps {
  monthArray: {value: string, id: number }[];
  yearSelectorArray: number[];
  updateSelectedMonth: Function;
  updateSelectedYear: Function;
  selectedYear: number;
  selectedMonthId: number;
};

export interface MonthSelectorProps {
    id: number,
    name: string,
};

export interface YearSelectorProps {
  year: number,
};

export interface ColumnGridProps {
  generatedMonthGrid: 
    { 
      value: number, 
      id: number, 
      month: number, 
      currentMonth: boolean, 
      today: boolean, 
      selected: boolean 
    }[];
  setDate: Date;
  setSelectProperty: Function;
}

export interface DayColumnProps {
    day: string;
    id: number;
    setDate: Date;
    generatedMonthGrid: 
      { 
        value: number, 
        id: number, 
        month: number, 
        currentMonth: boolean, 
        today: boolean, 
        selected: boolean 
      }[];
    setSelectProperty: Function;
  }

  export interface DayColumn_CalculateDateGridProps {
    dateInput: number;
    itemId: number; 
    month: number;
    currentMonth: boolean, 
    today: boolean,
    selected: boolean,
  }
  
  export interface DayHeaderProps {
    day: string;
  }

  export interface DayBoxProps {
    dayValue: number;
    currentMonth: boolean;
    today: boolean;
    selected: boolean;
    handleSelectedGridProperty: Function;
  }

  export interface MonthsData {
    value: string;
    id: number;
  }
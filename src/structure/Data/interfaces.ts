export interface Month {
    value: string, 
    id: number,
}

export interface GridArray { 
  value: number, 
  id: string, 
  month: number, 
  year: number,
  currentMonth: boolean, 
  today: boolean, 
  selected: boolean,
}

export interface DayColumnProps {
    day: string;
    id: number;
    setDate: Date;
    generatedMonthGrid: 
      { 
        value: number, 
        id: string, 
        month: number, 
        year: number,
        currentMonth: boolean, 
        today: boolean, 
        selected: boolean,
      }[];
    setSelectProperty: Function;
  };

  export interface DayColumn_CalculateDateGridProps {
    dateInput: number;
    itemId: string; 
    month: number;
    year: number;
    currentMonth: boolean;
    today: boolean;
    selected: boolean;
  };
  
  export interface DayHeaderProps {
    day: string;
  };

  export interface DayBoxProps {
    id: string;
    dayValue: number;
    month: number;
    year: number;
    currentMonth: boolean;
    today: boolean;
    selected: boolean;
    handleSelectedGridProperty: Function;
  };

  export interface MonthsData {
    value: string;
    id: number;
  };

  export interface EventsProps {
    id: string;
    year: number;
    month: number;
    day: number;
  };

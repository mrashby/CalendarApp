import React from "react";

import { DayHeaderProps } from '../../../../structure/Data/interfaces'

const DayHeader = ({ day }: DayHeaderProps) => {

  return (
    <div className='weekday-header'>{day}</div>
  );
};

export default DayHeader;

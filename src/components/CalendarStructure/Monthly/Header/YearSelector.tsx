import React from "react";

interface YearSelectorProps {
    year: number;
  };

// this was a separate component because I previously had conditionals below that have now been removed
// leaving this as-is in case I decide to change the logic
const YearSelector = (props: YearSelectorProps) => {
    return <option className="option" value={props.year}>{props.year}</option>
};

export default YearSelector;

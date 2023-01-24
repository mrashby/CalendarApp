import React from "react";

interface MonthSelectorProps {
    id: number;
    name: string;
};

// this was a separate component because I previously had conditionals below that have now been removed
// leaving this as-is in case I decide to change the logic
const MonthSelector = (props: MonthSelectorProps) => {
    return <option className="option" value={props.id}>{props.name}</option>
};

export default MonthSelector;

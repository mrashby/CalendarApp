import React from "react";

import { MonthSelectorProps } from '../../../../structure/Data/interfaces'

// this was a separate component because I previously had conditionals below that have now been removed
// leaving this as-is in case I decide to change the logic
const MonthSelector = ({ id, name }: MonthSelectorProps) => {
    return <option className="option" value={id}>{name}</option>
};

export default MonthSelector;

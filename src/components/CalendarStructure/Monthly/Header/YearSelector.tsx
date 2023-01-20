import React from "react";

import { YearSelectorProps } from '../../../../structure/Data/interfaces'


// this was a separate component because I previously had conditionals below that have now been removed
// leaving this as-is in case I decide to change the logic
const YearSelector = ({ year }: YearSelectorProps) => {
    return <option className="option" value={year}>{year}</option>
};

export default YearSelector;

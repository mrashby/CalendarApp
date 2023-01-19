import React from "react";

interface props {
    year: number,
};

const YearSelector = ({ year }: props) => {

    let currentYear: number = new Date().getFullYear();

    switch ( year === currentYear ) {
        case(true):
            return <option className="option" value={year} selected>{year}</option>
        default:
            return <option className="option" value={year}>{year}</option>
    };
};

export default YearSelector;

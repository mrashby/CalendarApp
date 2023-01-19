import React from "react";

interface props {
    id: number,
    name: string,
};

const MonthSelector = ({ id, name }: props) => {

    let currentMonth = new Date().getMonth();

    switch ( currentMonth === id ) {
        case true:
            return <option className="option" value={id} selected>{name}</option>
        default:
            return <option className="option" value={id}>{name}</option>
    };
};

export default MonthSelector;

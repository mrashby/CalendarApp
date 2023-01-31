import React from "react";

import { EventsProps } from '../../structure/Data/interfaces'

const Events = ({ id }: EventsProps) => {
    return (
    <div className="events">
        <div className="event">
            Event Date {id}
        </div>
    </div>
)};

export default Events;

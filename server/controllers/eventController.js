let eventsArray =
    [
        { name: 'First event', description: 'meet up', id: 1, },
        { name: 'Second event', description: 'appointment', id: 2, },
        { name: 'Third event', description: 'due date', id: 3, },
    ];

// desc: get events
// route: GET /api/events
// access: Private
export const getEvents = (req, res) => {
    res.status(200).json(eventsArray);
};

// desc: create event
// route: POST /api/events
// access: Private
export const createEvent = (req, res) => {

    const incId = eventsArray[eventsArray.length - 1].id + 1
    eventsArray.push( { name: req.body.name, description: req.body.description, id: incId, })
    res.status(200).json(eventsArray);

};

// desc: update event
// route: PUT /api/events/:id
// access: Private
export const updateEvent = (req, res) => {
    res.status(200).json({ message: `updated event with id of ${req.params.id}` });
};

// desc: delete event
// route: DELETE /api/events/:id
// access: Private
export const deleteEvent = (req, res) => {
    eventsArray = eventsArray.filter(x => x.id != req.params.id);
    res.status(200).json({ message: `deleted event with id of ${req.params.id}`});
};
import Express from 'express';

import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js'

const router = Express.Router()

router.route('/').get(getEvents).post(createEvent);

router.route('/:id').put(updateEvent).delete(deleteEvent);


export default router;
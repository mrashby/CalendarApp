import Express from "express";
import dotenv from "dotenv";
dotenv.config();

import router from "./routes/eventRoutes.js";

const port = process.env.PORT || 5000;

const app = Express();

app.use(Express.json());

app.use('/api/events', router);

app.listen(port, () => console.log(`Server start on port ${port}`));

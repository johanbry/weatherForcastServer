import express, { Express } from 'express';
const app: Express = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import weatherRouter from './routes/weather.router';

const port: string = process.env.PORT || '3000';

app.use(cors());
app.use('/api/weather/', weatherRouter);

app.listen(port, () =>
  console.log(`Server is up and running, listening on port ${port}`)
);

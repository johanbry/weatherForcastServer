import express, { Express } from 'express';
const app: Express = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import weatherRouter from './routes/weather.router';
import cityRouter from './routes/cities.router';
import { createConnection } from './db/connect.db';
import { Db } from 'mongodb';

const port: string = process.env.PORT || '3000';

app.use(cors());
app.use('/api/weather', weatherRouter);
app.use('/api/cities', cityRouter);

// connect to db and start server
(async () => {
  try {
    await createConnection();
    app.listen(port, () => console.log(`Server listens on port ${port}`));
  } catch (err) {
    console.log(err, 'Kunde inte skapa databaskoppling');
  }
})();

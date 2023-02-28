import express, { Express } from 'express';
const app: Express = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

import weatherRouter from './routes/weather.router';
import cityRouter from './routes/cities.router';
import { getDb, connectToDb } from './db/connect.db';

const port: string = process.env.PORT || '3000';

app.use(cors());
app.use('/api/weather', weatherRouter);
app.use('/api/cities', cityRouter);

let db;

connectToDb((err: Error) => {
  // If we don't have an error we listen to request.
  if (!err) {
    app.listen(port, () =>
      console.log(`Server is up and running, listening on port ${port}`)
    );
  }
  db = getDb();
  console.log(db);
});

export default db;

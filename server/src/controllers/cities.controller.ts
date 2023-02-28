import { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';
import db from '../server';

export const getCities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataPath = 'city.list.json';
  try {
    const result = await fs.readFile(dataPath, 'utf-8');

    if (result.length < 1) {
      const err = new Error('File does not hold any data');
      throw err;
    }

    const cities = JSON.parse(result);

    res.status(200).json(cities);
  } catch (err) {
    console.log(err);
  }
};

// export const getFilteredCities = () => {
//   db.collection()
// }

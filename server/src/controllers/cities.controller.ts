import { NextFunction, Request, Response } from 'express';
import fs from 'fs/promises';
import { getConnection } from '../db/connect.db';

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

export const getFilteredCities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const city = req.query.city as string;
    console.log('city queryu: ', city);

    const db = getConnection();
    const collection = db.collection('cities');
    const cities = await collection
      .aggregate([
        {
          $search: {
            compound: {
              filter: city.split(' ').map((word: string) => ({
                autocomplete: {
                  query: word,
                  path: 'name',
                },
              })),
            },
          },
        },
        //{ $sort: { name: 1 } },
        { $limit: 20 },
      ])
      .toArray();

    res.status(200).json(cities);
  } catch (err) {
    console.log(err);
  }
};

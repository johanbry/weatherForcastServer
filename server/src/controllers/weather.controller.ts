import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export const getCurrentWeather = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { mode } = req.query;

    const { lat, long } = req.params;
    if (!lat || !long) throw Error('Missing coordinates');
    let url = `https://api.openweathermap.org/data/2.5/${mode}?lat=${lat}&lon=${long}&units=metric&appid=${process.env.API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=metric&appid={API key}

// http://localhost:3000/api/weather/lat/lon?timeframe='current'

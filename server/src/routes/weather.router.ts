import express, { Express, Request, Response } from 'express';
import { getCurrentWeather } from '../controllers/weather.controller.js';

const weatherRouter = express.Router();
weatherRouter.get('/current/:lat/:long', getCurrentWeather);

export default weatherRouter;

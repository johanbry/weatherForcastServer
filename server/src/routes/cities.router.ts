import express from 'express';

const cityRouter = express.Router();

import { getCities, getFilteredCities } from '../controllers/cities.controller';

cityRouter.get('/', getCities);
cityRouter.get('/filter', getFilteredCities);
export default cityRouter;

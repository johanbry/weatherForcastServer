import express from 'express';

const cityRouter = express.Router();

import { getCities } from '../controllers/cities.controller';

cityRouter.get('/', getCities);
export default cityRouter;

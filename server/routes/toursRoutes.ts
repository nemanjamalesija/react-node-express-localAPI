import express from 'express';
import { addTour, getRoutes, checkBody } from '../handlers/toursHandlers';
import { CustomRequest } from '../constants/types';

const router = express.Router();

router.param('id', (req: CustomRequest, res, next, val) => {
  console.log(`id is ${val}`);
  next();
});

router.route('/').get(getRoutes).post(checkBody, addTour);

export { router };

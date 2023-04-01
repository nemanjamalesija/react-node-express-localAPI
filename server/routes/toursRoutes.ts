import express from 'express';
import fs from 'fs';
import { addTour, getRoutes } from '../handlers/toursHandlers';

const router = express.Router();

router.route('/').get(getRoutes).post(addTour);

export { router };

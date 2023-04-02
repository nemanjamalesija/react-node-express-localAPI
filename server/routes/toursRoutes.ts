import express from 'express';
import fs from 'fs';
import { addTour, getRoutes, checkBody } from '../handlers/toursHandlers';

const router = express.Router();

router.route('/').get(getRoutes).post(checkBody, addTour);

export { router };

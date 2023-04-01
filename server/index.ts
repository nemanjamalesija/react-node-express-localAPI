import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import { Response, NextFunction } from 'express';
import { CustomRequest } from './constants/types';
import { router as toursRouter } from './routes/toursRoutes';

const app = express();

app.use(json());
app.use(cors());
app.use(morgan('dev'));

const logDate = (req: CustomRequest, res: Response, next: NextFunction) => {
  const date = new Date().toISOString();
  req.time = date;
  next();
};

app.use(logDate);

app.use('/api/v1/tours', toursRouter);

export { app };

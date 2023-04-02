import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Response, NextFunction } from 'express';
import { CustomRequest } from './constants/types';
import { router as toursRouter } from './routes/toursRoutes';
import { router as userRouter } from './routes/userRoutes';

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
app.use('/api/v1/users', userRouter);

export { app };

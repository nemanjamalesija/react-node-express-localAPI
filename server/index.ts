import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import fs from 'fs';
import morgan from 'morgan';
import { Request, Response, NextFunction } from 'express';

const app = express();
const server = http.createServer(app);

app.use(json());
app.use(cors());
app.use(morgan('dev'));

interface CustomRequest extends Request {
  time?: string;
}

const logDate = (req: CustomRequest, res: Response, next: NextFunction) => {
  const date = new Date().toISOString();
  req.time = date;
  next();
};

app.use(logDate);

const port = 3000;

const tours = JSON.parse(
  fs.readFileSync('./constants/dev-data/data/tours-simple.json', 'utf-8')
);

//handlers
const getRoutes = (req: CustomRequest, res: Response) => {
  res.status(200).json({
    status: 'success',
    time: req.time,
    results: tours.length,
    data: {
      tours,
    },
  });
};

const addTour = (req: CustomRequest, res: Response) => {
  const newTour = { ...req.body };
  const newTours = [...tours, newTour];

  fs.writeFile(
    './constants/dev-data/data/tours-simple.json',
    JSON.stringify(newTours),
    (error) => {
      res.status(201).json({
        status: 'success',
        time: req.time,
        data: { tour: newTour },
      });
    }
  );
};

const toursRouter = express.Router();
app.use('/api/v1/tours', toursRouter);

toursRouter.route('/').get(getRoutes).post(addTour);
server.listen(port, () => {
  console.log('Server listening on port ' + port);
});

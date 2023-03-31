import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import fs from 'fs';
import morgan from 'morgan';

const app = express();
const server = http.createServer(app);

app.use(json());
app.use(cors());
app.use(morgan('dev'));

const port = 3000;

const tours = JSON.parse(
  fs.readFileSync('./constants/dev-data/data/tours-simple.json', 'utf-8')
);

//handlers
const getRoutes = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

const addTour = (req, res) => {
  const newTour = { ...req.body };
  const newTours = [...tours, newTour];

  fs.writeFile(
    './constants/dev-data/data/tours-simple.json',
    JSON.stringify(newTours),
    (error) => {
      res.status(201).json({
        status: 'success',
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

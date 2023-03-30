import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import fs from 'fs';

const app = express();
const server = http.createServer(app);

app.use(json());
app.use(cors());
const port = 3000;

const tours = JSON.parse(
  fs.readFileSync('./constants/dev-data/data/tours-simple.json', 'utf-8')
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
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
});

server.listen(port, () => {
  console.log('Server listening on port ' + port);
});

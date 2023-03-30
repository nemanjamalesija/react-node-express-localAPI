import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import fs from 'fs';

const app = express();
const server = http.createServer(app);

app.use(json());
app.use(cors());

const tours = fs
  .readFileSync('./constants/dev-data/data/tours-simple.json')
  .toString();

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});

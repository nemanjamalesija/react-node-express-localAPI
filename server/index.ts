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

server.listen(port, () => {
  console.log('Server listening on port ' + port);
});

import express from 'express';
import http from 'http';
import cors from 'cors';
import { data } from './constants/data';

const app = express();
const server = http.createServer(app);
app.use(cors());

app.get('/api/movies', (req, res) => {
  const moviesJSON = JSON.stringify(data);
  console.log(moviesJSON);
  res.setHeader('Content-Type', 'application/json');
  res.end(moviesJSON);
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});

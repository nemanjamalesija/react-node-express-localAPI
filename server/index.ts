import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
app.use(cors());

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});

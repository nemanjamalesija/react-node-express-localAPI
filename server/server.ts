import http from 'http';
import { app } from '.';
import dotenv from 'dotenv';

const port = process.env.port;
dotenv.config({ path: './config.env' });

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server listening on port ' + port);
});

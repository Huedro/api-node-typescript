/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import express from 'express';
import 'dotenv/config';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router);

export { server };
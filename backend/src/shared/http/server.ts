import 'reflect-metadata';

import express from 'express';

import '@application/infra/database';
import { routes } from '@shared/http/routes';

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3535, () => {
  console.log(`
    ✅ - Server is running! 
  `);
});

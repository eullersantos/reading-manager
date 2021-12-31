import 'reflect-metadata';

import express from 'express';

import '@application/infra/database';

import { errorMiddleware } from '@shared/http/middlewares/ErrorMiddleware';
import { routes } from '@shared/http/routes';

const server = express();

server.use(express.json());
server.use(routes);
server.use(errorMiddleware);

server.listen(3535, () => {
  console.log(`
    ✅ - Server is running! 
  `);
});

/*
  TODO: Utilizar esta lista para testar as rotas
  https://www.npmjs.com/package/supertest
*/

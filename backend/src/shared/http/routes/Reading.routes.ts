import { ReadingController } from '@application/controllers/ReadingController';
import { Router } from 'express';

const readingRoutes = Router();

const readingController = new ReadingController();

readingRoutes.get('/readings', (request, response) => {
  return readingController.getAll(request, response);
});

export { readingRoutes };

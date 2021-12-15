import { Router } from 'express';

import { ReadingController } from '@application/controllers/ReadingController';

const readingRoutes = Router();

const readingController = new ReadingController();

readingRoutes.get('/reading', (request, response) => {
  return readingController.getAll(request, response);
});

export { readingRoutes };

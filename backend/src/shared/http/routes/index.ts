import { Router } from 'express';

import { readingRoutes } from '@shared/http/routes/Reading.routes';

const routes = Router();

routes.use('/reading', readingRoutes);

export { routes };

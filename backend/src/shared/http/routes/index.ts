import { Router } from 'express';

import { userRoutes } from '@shared/http/routes/User.routes';

// import { readingRoutes } from '@shared/http/routes/Reading.routes';

const routes = Router();

routes.use('/user', userRoutes);
// routes.use('/reading', readingRoutes);

export { routes };

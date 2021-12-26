import { Router } from 'express';

import { ServerError } from '@shared/errors/ServerError';
import { routerResolve } from '@shared/utils/RouterAdapater';

const userRoutes = Router();

userRoutes.get(
  '/',
  routerResolve((req, res) => {
    throw new Error('AaaaaaaAaAAAaa');
  })
);

userRoutes.post(
  '/',
  routerResolve((req, res) => {
    throw new ServerError('EEeeeEeeeeEEEeeeeEeE');
  })
);

export { userRoutes };

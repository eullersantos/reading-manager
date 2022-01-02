import { Router } from 'express';

import { IUserController } from '@domain/interfaces/controllers';
import container from '@shared/container';
import { routerResolve } from '@shared/utils/RouterAdapater';

const userRoutes = Router();
const userController = container.get<IUserController>('UserController');

userRoutes.post(
  '/',
  routerResolve(async (req, res) => {
    await userController.create(req, res);
  })
);

export { userRoutes };

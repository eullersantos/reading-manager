import { Router } from 'express';

import { UserController } from '@application/controllers/UserController';
import { routerResolve } from '@shared/utils/RouterAdapater';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', routerResolve(userController.create));

export { userRoutes };

import { Container } from 'inversify';

import { UserController } from '@application/controllers/UserController';
import { IUserController } from '@domain/interfaces/controllers';
import { IUserService } from '@domain/interfaces/services';
import { UserService } from '@domain/services';

const container = new Container();

container.bind<IUserController>('UserController').to(UserController);
container.bind<IUserService>('UserService').to(UserService);

export default container;

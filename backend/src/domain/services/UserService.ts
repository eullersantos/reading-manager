import { injectable } from 'inversify';

import { UserCreateDto } from '@domain/DTOs/User';
import { IUserService } from '@domain/interfaces/services';

@injectable()
export class UserService implements IUserService {
  async create(user: UserCreateDto): Promise<any> {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(user);
  }
}

import { UserCreateDto } from '@domain/DTOs/User';

export interface IUserService {
  create(user: UserCreateDto): Promise<any>;
}

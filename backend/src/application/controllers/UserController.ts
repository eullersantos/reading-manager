import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { IUserService } from '@domain/interfaces/services';
import { ServerError } from '@shared/errors/ServerError';
import { ValidateUserCreate } from '@shared/http/validators/User';

@injectable()
export class UserController {
  constructor(@inject('UserService') private service: IUserService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const validateRequestBody = new ValidateUserCreate(body);

    if (validateRequestBody.showErrorMessage())
      throw new ServerError(validateRequestBody.showErrorMessage(), 400);

    await this.service.create(body);

    return response.status(201).json();
  }
}

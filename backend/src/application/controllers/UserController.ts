import { Request, Response } from 'express';

import { ServerError } from '@shared/errors/ServerError';
import { ValidateUserCreate } from '@shared/http/validators/User';

export class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const validateRequestBody = new ValidateUserCreate(body);

    if (validateRequestBody.showErrorMessage())
      throw new ServerError(validateRequestBody.showErrorMessage(), 400);

    return response.status(201).json();
  }
}

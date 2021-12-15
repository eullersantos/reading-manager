import { Request, Response } from 'express';

import { IReadingController } from '../../domain/interfaces';

class ReadingController implements IReadingController {
  getAll(request: Request, response: Response): Response {
    console.log(request, response);

    response.status(201).send();
  }
}

export { ReadingController };

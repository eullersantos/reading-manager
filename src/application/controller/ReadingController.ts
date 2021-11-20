import { Request, Response } from "express";

import { IReadingController } from "../../domain/interfaces";

class ReadingController implements IReadingController {
  getAll(request: Request, response: Response): void {
    console.log(request, response);
  }
}

export { ReadingController };

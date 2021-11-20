import { Request, Response } from "express";

export interface IReadingController {
  getAll(request: Request, response: Response): Promise<Response>;
}

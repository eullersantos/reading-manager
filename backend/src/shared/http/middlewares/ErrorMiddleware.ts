import { Response, Request, NextFunction } from 'express';

import { ServerError } from '@shared/errors/ServerError';

export function errorMiddleware(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): Response {
  if (!error) next();

  if (error instanceof ServerError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error.message}`,
  });
}

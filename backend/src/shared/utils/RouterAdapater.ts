import { Handler, Request, Response, NextFunction } from 'express';

export const routerResolve =
  (handleFn: Handler) =>
  (request: Request, response: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(handleFn(request, response, next)).catch((error) =>
      next(error)
    );
  };

import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../mvc/httpError';

export const errorMiddleware = (error: HttpError, request: Request, response: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response
    .status(status)
    .send(message);
}


import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';
import AppError from './AppError';

interface IValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) => {
  console.log(error);

  if (error instanceof ValidationError) {
    const errors: IValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation fails', errors });
  }

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};

export default errorHandler;

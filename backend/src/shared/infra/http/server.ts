import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import '@shared/infra/typeorm';
import '@shared/container';

import cors from 'cors';
import AppError from '@shared/error/AppError';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    console.log(error);

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
  },
);

app.listen(3333, () => {
  console.log('Server Started on port 3333');
});

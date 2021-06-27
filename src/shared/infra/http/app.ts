import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import 'express-async-errors';
import { AppError } from '@shared/errors/AppError';
import '@shared/container';

import swaggerDocument from '../../../../swagger_output.json';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.status).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Interval server error = ${err.message}`,
    });
  }
);

export { app };

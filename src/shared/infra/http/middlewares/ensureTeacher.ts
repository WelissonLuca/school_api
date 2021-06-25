import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';

import { UserRepository } from '@modules/school/infra/typeorm/repositories/UserRepository';

export async function ensureTeacher(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usersRepositories = container.resolve(UserRepository);

  const { teacher } = await usersRepositories.findById(user_id);

  if (teacher) {
    return next();
  }

  return response.status(401).json({
    error: 'Unauthorized, only teachers can register tests',
  });
}

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSchoolTestUseCase } from './CreateSchoolTestUseCase';

class CreateSchoolController {
  async handle(request: Request, response: Response) {
    const { title, subjects } = request.body;

    const createSchoolTestUseCase = container.resolve(CreateSchoolTestUseCase);

    const schoolTest = await createSchoolTestUseCase.execute({
      title,
      subjects,
    });

    return response.status(201).json(schoolTest);
  }
}

export { CreateSchoolController };

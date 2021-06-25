import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAlternativesUseCase } from './CreateAlternativesUseCase';

class CreateAlternativesController {
  async handle(request: Request, response: Response) {
    const { alternative, correct, question_id } = request.body;

    const createQuestionUseCase = container.resolve(CreateAlternativesUseCase);

    const newAlternative = await createQuestionUseCase.execute({
      alternative,
      correct,
      question_id,
    });

    return response.status(201).json(newAlternative);
  }
}

export { CreateAlternativesController };

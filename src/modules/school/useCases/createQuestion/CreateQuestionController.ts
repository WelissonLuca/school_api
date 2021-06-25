import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateQuestionUseCase } from './CreateQuestionUseCase';

class CreateQuestionController {
  async handle(request: Request, response: Response) {
    const { question, test_id } = request.body;

    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

    const newQuestion = await createQuestionUseCase.execute({
      question,
      test_id,
    });

    return response.status(201).json(newQuestion);
  }
}

export { CreateQuestionController };

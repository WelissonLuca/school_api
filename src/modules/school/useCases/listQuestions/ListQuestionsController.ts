import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListQuestionUseCase } from './ListQuestionsUseCase';

class ListQuestionController {
  async handle(request: Request, response: Response) {
    const { test_id } = request.params;

    const listQuestionUseCase = container.resolve(ListQuestionUseCase);
    const questions = await listQuestionUseCase.execute(test_id);

    return response.json(questions);
  }
}

export { ListQuestionController };

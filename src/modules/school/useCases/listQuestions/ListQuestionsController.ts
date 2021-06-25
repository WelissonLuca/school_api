import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListQuestionUseCase } from './ListQuestionsUseCase';

class ListQuestionController {
  async handle(request: Request, response: Response) {
    const { test_id } = request.headers;

    const test = test_id.toString();
    const listQuestionUseCase = container.resolve(ListQuestionUseCase);
    const questions = await listQuestionUseCase.execute(test);

    return response.json(questions);
  }
}

export { ListQuestionController };

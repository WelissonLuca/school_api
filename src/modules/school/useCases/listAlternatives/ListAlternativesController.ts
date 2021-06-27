import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAlternativesUseCase } from './ListAlternativesUseCase';

class ListAlternativesController {
  async handle(request: Request, response: Response) {
    const { question_id } = request.params;

    const listAlternativesUseCase = container.resolve(ListAlternativesUseCase);
    const alternatives = await listAlternativesUseCase.execute(question_id);

    return response.json(alternatives);
  }
}

export { ListAlternativesController };

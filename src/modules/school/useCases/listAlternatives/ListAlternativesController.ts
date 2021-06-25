import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAlternativesUseCase } from './ListAlternativesUseCase';

class ListAlternativesController {
  async handle(request: Request, response: Response) {
    const { question_id } = request.headers;

    const alternative = question_id.toString();
    const listAlternativesUseCase = container.resolve(ListAlternativesUseCase);
    const alternatives = await listAlternativesUseCase.execute(alternative);

    return response.json(alternatives);
  }
}

export { ListAlternativesController };

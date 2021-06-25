import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSchoolTestUseCase } from './ListSchoolTestsUseCase';

class ListSchoolTestsController {
  async handle(request: Request, response: Response) {
    const listSchoolTestUseCase = container.resolve(ListSchoolTestUseCase);

    const schoolTests = await listSchoolTestUseCase.execute();

    return response.json(schoolTests);
  }
}

export { ListSchoolTestsController };

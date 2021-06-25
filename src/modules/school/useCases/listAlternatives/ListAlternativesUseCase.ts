import { inject, injectable } from 'tsyringe';

import { Alternative } from '@modules/school/infra/typeorm/entities/Alternative';
import { IAlternativeRepository } from '@modules/school/repositories/IAlternativeRepository';

@injectable()
class ListAlternativesUseCase {
  constructor(
    @inject('AlternativeRepository')
    private alternativeRepository: IAlternativeRepository
  ) {}
  async execute(question_id: string): Promise<Alternative[]> {
    const result = await this.alternativeRepository.list({
      where: {
        question_id,
      },
      relations: ['questions'],
    });

    return result;
  }
}

export { ListAlternativesUseCase };

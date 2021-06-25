import { inject, injectable } from 'tsyringe';

import { IAlternativeRepository } from '@modules/school/repositories/IAlternativeRepository';
import { AppError } from '@shared/errors/AppError';

import { Alternative } from '../../infra/typeorm/entities/Alternative';

interface IAlternativeRequest {
  alternative: string;
  correct: boolean;
  question_id: string;
}

@injectable()
class CreateAlternativesUseCase {
  constructor(
    @inject('AlternativeRepository')
    private alternativeRepository: IAlternativeRepository
  ) {}
  async execute({
    alternative,
    correct,
    question_id,
  }: IAlternativeRequest): Promise<Alternative> {
    if (!alternative) throw new AppError('Alternative incorrect!');

    const result = this.alternativeRepository.create({
      alternative,
      correct,
      question_id,
    });

    return result;
  }
}

export { CreateAlternativesUseCase };

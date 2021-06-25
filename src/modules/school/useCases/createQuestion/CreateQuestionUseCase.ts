import { inject, injectable } from 'tsyringe';

import { IQuestionRepository } from '@modules/school/repositories/IQuestionRepository';
import { AppError } from '@shared/errors/AppError';

import { Question } from '../../infra/typeorm/entities/Questions';

interface ISchoolTestRequest {
  question: string;
  test_id: string;
}

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository
  ) {}
  async execute({ question, test_id }: ISchoolTestRequest): Promise<Question> {
    if (!question) throw new AppError('Question incorrect!');

    const result = this.questionRepository.create({ question, test_id });

    return result;
  }
}

export { CreateQuestionUseCase };

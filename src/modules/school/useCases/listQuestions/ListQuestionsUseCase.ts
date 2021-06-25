import { inject, injectable } from 'tsyringe';

import { IQuestionRepository } from '@modules/school/repositories/IQuestionRepository';

import { Question } from '../../infra/typeorm/entities/Questions';

@injectable()
class ListQuestionUseCase {
  constructor(
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository
  ) {}
  async execute(test_id: string): Promise<Question[]> {
    const result = await this.questionRepository.findAll({
      where: {
        test_id,
      },
      relations: ['schoolTest'],
    });

    return result;
  }
}

export { ListQuestionUseCase };

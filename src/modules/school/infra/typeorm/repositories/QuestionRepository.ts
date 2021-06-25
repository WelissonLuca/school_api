import { getRepository, Repository } from 'typeorm';

import { ICreateQuestionsDTO } from '@modules/school/dtos/ICreateQuestionsDTO';
import { IQuestionRepository } from '@modules/school/repositories/IQuestionRepository';

import { Question } from '../entities/Questions';

class QuestionRepository implements IQuestionRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = getRepository(Question);
  }

  async create({ question, test_id }: ICreateQuestionsDTO): Promise<Question> {
    const newQuestion = this.repository.create({
      question,
      test_id,
    });

    const result = await this.repository.save(newQuestion);

    return result;
  }

  async findAll(data): Promise<Question[]> {
    const result = await this.repository.find(data);
    return result;
  }

  async findByTestId(test_id: string): Promise<Question> {
    const result = await this.repository.findOne({
      test_id,
    });

    return result;
  }

  async findById(id: string): Promise<Question> {
    const result = await this.repository.findOne({ id });

    return result;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

export { QuestionRepository };

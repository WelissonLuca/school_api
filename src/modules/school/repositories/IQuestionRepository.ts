import { ICreateQuestionsDTO } from '../dtos/ICreateQuestionsDTO';
import { Question } from '../infra/typeorm/entities/Questions';

interface IQuestionRepository {
  create(data: ICreateQuestionsDTO): Promise<Question>;
  findAll(): Promise<Question[]>;
  findByTestId(test_id: string): Promise<Question>;
  findById(id: string): Promise<Question>;
  delete(id: string): Promise<void>;
}

export { IQuestionRepository };

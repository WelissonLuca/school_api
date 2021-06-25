import { getRepository, Repository } from 'typeorm';

import { ICreateAlternativesDTO } from '@modules/school/dtos/ICreateAlternativesDTO';
import { IAlternativeRepository } from '@modules/school/repositories/IAlternativeRepository';

import { Alternative } from '../entities/Alternative';

class AlternativeRepository implements IAlternativeRepository {
  private repository: Repository<Alternative>;

  constructor() {
    this.repository = getRepository(Alternative);
  }

  async create({
    alternative,
    correct,
    question_id,
  }: ICreateAlternativesDTO): Promise<Alternative> {
    const newAlternative = this.repository.create({
      alternative,
      correct,
      question_id,
    });

    const result = await this.repository.save(newAlternative);

    return result;
  }

  async list(data): Promise<Alternative[]> {
    const result = await this.repository.find(data);
    return result;
  }

  async findById(id: string): Promise<Alternative> {
    const result = await this.repository.findOne({ id });

    return result;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

export { AlternativeRepository };

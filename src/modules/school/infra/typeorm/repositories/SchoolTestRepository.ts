import { getRepository, Repository } from 'typeorm';

import { ICreateSchoolTestsDTO } from '@modules/school/dtos/ICreateSchoolTests';
import { ISchoolTestRepository } from '@modules/school/repositories/ISchoolTestRepository';

import { SchoolTest } from '../entities/SchoolTest';

class SchoolTestRepository implements ISchoolTestRepository {
  private repository: Repository<SchoolTest>;

  constructor() {
    this.repository = getRepository(SchoolTest);
  }

  async create({
    title,
    subjects,
  }: ICreateSchoolTestsDTO): Promise<SchoolTest> {
    const schoolTest = this.repository.create({
      title,
      subjects,
    });

    const result = await this.repository.save(schoolTest);

    return result;
  }

  async findAll(): Promise<SchoolTest[]> {
    const result = await this.repository.find();
    return result;
  }

  async findByTitle(title: string): Promise<SchoolTest> {
    const result = await this.repository.findOne({
      title,
    });

    return result;
  }

  async findById(id: string): Promise<SchoolTest> {
    const result = await this.repository.findOne({ id });

    return result;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

export { SchoolTestRepository };

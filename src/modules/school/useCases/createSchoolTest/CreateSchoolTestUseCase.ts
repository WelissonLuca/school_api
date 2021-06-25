import { inject, injectable } from 'tsyringe';

import { ISchoolTestRepository } from '@modules/school/repositories/ISchoolTestRepository';
import { IUserRepository } from '@modules/school/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';

import { SchoolTest } from '../../infra/typeorm/entities/SchoolTest';

interface ISchoolTestRequest {
  title: string;
  subjects: string;
}

@injectable()
class CreateSchoolTestUseCase {
  constructor(
    @inject('SchoolTestRepository')
    private schoolTestRepository: ISchoolTestRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({ title, subjects }: ISchoolTestRequest): Promise<SchoolTest> {
    if (!title) throw new AppError('Title incorrect!');

    const result = this.schoolTestRepository.create({ title, subjects });

    return result;
  }
}

export { CreateSchoolTestUseCase };

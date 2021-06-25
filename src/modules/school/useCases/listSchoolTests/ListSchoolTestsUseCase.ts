import { inject, injectable } from 'tsyringe';

import { ISchoolTestRepository } from '@modules/school/repositories/ISchoolTestRepository';

import { SchoolTest } from '../../infra/typeorm/entities/SchoolTest';

@injectable()
class ListSchoolTestUseCase {
  constructor(
    @inject('SchoolTestRepository')
    private schoolTestRepository: ISchoolTestRepository
  ) {}
  async execute(): Promise<SchoolTest[]> {
    const result = await this.schoolTestRepository.findAll();

    return result;
  }
}

export { ListSchoolTestUseCase };

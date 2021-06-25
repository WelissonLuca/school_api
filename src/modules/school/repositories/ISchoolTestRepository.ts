import { ICreateSchoolTestsDTO } from '../dtos/ICreateSchoolTests';
import { SchoolTest } from '../infra/typeorm/entities/SchoolTest';

interface ISchoolTestRepository {
  create(data: ICreateSchoolTestsDTO): Promise<SchoolTest>;
  findAll(): Promise<SchoolTest[]>;
  findByTitle(title: string): Promise<SchoolTest>;
  findById(id: string): Promise<SchoolTest>;
  delete(id: string): Promise<void>;
}

export { ISchoolTestRepository };

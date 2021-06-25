import { ICreateAlternativesDTO } from '../dtos/ICreateAlternativesDTO';
import { Alternative } from '../infra/typeorm/entities/Alternative';

interface IAlternativeRepository {
  create(data: ICreateAlternativesDTO): Promise<Alternative>;
  list(data): Promise<Alternative[]>;
  findById(id: string): Promise<Alternative>;
  delete(id: string): Promise<void>;
}

export { IAlternativeRepository };

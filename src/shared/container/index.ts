import { container } from 'tsyringe';

import { SchoolTestRepository } from '@modules/school/infra/typeorm/repositories/SchoolTestRepository';
import { UserRepository } from '@modules/school/infra/typeorm/repositories/UserRepository';
import { ISchoolTestRepository } from '@modules/school/repositories/ISchoolTestRepository';
import { IUserRepository } from '@modules/school/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ISchoolTestRepository>(
  'SchoolTestRepository',
  SchoolTestRepository
);

import { container } from 'tsyringe';

import { AlternativeRepository } from '@modules/school/infra/typeorm/repositories/AlternativesRepository';
import { QuestionRepository } from '@modules/school/infra/typeorm/repositories/QuestionRepository';
import { SchoolTestRepository } from '@modules/school/infra/typeorm/repositories/SchoolTestRepository';
import { UserRepository } from '@modules/school/infra/typeorm/repositories/UserRepository';
import { IAlternativeRepository } from '@modules/school/repositories/IAlternativeRepository';
import { IQuestionRepository } from '@modules/school/repositories/IQuestionRepository';
import { ISchoolTestRepository } from '@modules/school/repositories/ISchoolTestRepository';
import { IUserRepository } from '@modules/school/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ISchoolTestRepository>(
  'SchoolTestRepository',
  SchoolTestRepository
);
container.registerSingleton<IQuestionRepository>(
  'QuestionRepository',
  QuestionRepository
);

container.registerSingleton<IAlternativeRepository>(
  'AlternativeRepository',
  AlternativeRepository
);

import { container } from 'tsyringe';

import { UserRepository } from '@modules/school/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from '@modules/school/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

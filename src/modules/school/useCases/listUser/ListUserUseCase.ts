import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/school/repositories/IUserRepository';

import { User } from '../../infra/typeorm/entities/User';

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute(): Promise<User[]> {
    const [name, email, teacher, created_at, updated_at] =
      await this.userRepository.findAll();

    const result = [name, email, teacher, created_at, updated_at];

    return result;
  }
}

export { ListUserUseCase };

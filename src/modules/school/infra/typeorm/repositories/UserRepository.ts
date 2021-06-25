import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/school/dtos/ICreateUserDTO';
import { IUserRepository } from '@modules/school/repositories/IUserRepository';

import { User } from '../entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    teacher,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      teacher,
    });

    const result = await this.repository.save(user);

    return result;
  }

  async findAll(): Promise<User[]> {
    const result = await this.repository.find();
    return result;
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.repository.findOne({
      email,
    });

    return result;
  }

  async findById(id: string): Promise<User> {
    const result = await this.repository.findOne({ id });

    return result;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

export { UserRepository };

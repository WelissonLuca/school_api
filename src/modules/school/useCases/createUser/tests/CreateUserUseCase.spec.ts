import { Connection } from 'typeorm';

import { ICreateUserDTO } from '@modules/school/dtos/ICreateUserDTO';
import { UserRepository } from '@modules/school/infra/typeorm/repositories/UserRepository';
import { AppError } from '@shared/errors/AppError';
import { connection } from '@shared/infra/typeorm/index';

import { CreateUserUseCase } from '../CreateUserUseCase';

let db: Connection;
let userRepository: UserRepository;
let createUserUseCase: CreateUserUseCase;
describe('Create User', () => {
  beforeAll(async () => {
    db = await connection();
    await db.runMigrations();
    userRepository = new UserRepository();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });
  afterAll(async () => {
    await db.query(
      'drop table users; drop table alternatives; drop table questions; drop table school_tests; drop table migrations'
    );
    await db.close();
  });

  it('should be able to create a new user', async () => {
    const userDTO: ICreateUserDTO = {
      name: 'example user 1',
      password: 'example',
      email: 'example@example.com',
      teacher: true,
    };
    const user = await createUserUseCase.execute(userDTO);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('password');
    expect(user).toHaveProperty('teacher');
  });

  it('should  not be able create a new user with an already used email', async () => {
    await expect(async () => {
      await createUserUseCase.execute({
        name: 'example user 2',
        email: 'example2@example.com',
        password: 'example',
        teacher: true,
      });
      await createUserUseCase.execute({
        name: 'example user 2',
        password: 'example',
        email: 'example2@example.com',
        teacher: false,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

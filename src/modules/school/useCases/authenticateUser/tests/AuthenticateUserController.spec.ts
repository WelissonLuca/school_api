import request from 'supertest';
import { Connection } from 'typeorm';

import { ICreateUserDTO } from '@modules/school/dtos/ICreateUserDTO';
import { app } from '@shared/infra/http/app';
import { connection } from '@shared/infra/typeorm/index';

let db: Connection;
describe('Authenticate User Controller', () => {
  beforeAll(async () => {
    db = await connection();
    await db.runMigrations();
  });

  afterAll(async () => {
    await db.query(
      'drop table users; drop table alternatives; drop table questions; drop table school_tests; drop table migrations'
    );
    await db.close();
  });

  const userData: ICreateUserDTO = {
    name: 'example user 1',
    email: 'example1@example.com',
    password: 'example',
    teacher: true,
  };
  const login = {
    email: userData.email,
    password: userData.password,
  };

  it('should be able to authenticate user', async () => {
    const response = await request(app).post('/school/users').send(userData);
    const authenticateUser = await request(app)
      .post('/school/login')
      .send(login);

    expect(authenticateUser.status).toBe(200);
  });

  it('should be able to authenticate user in password or email incorrect', async () => {
    const response = await request(app).post('/school/users').send(userData);
    const authenticateUser = await request(app).post('/school/login').send({
      email: login.email,
      password: 'dsadsad',
    });

    expect(authenticateUser.status).toBe(400);
  });
});

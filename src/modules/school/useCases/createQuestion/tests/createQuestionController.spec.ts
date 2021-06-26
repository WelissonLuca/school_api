import jwt from 'jsonwebtoken';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import { connection } from '@shared/infra/typeorm/index';

import authConfig from '../../../../../config/auth';

let db: Connection;
describe('Create Question Controller', () => {
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

  it('should be able to create new question', async () => {
    const newUser = await request(app).post('/school/users').send({
      name: 'example user 1',
      email: 'example1@example.com',
      password: 'example',
      teacher: true,
    });
    const authenticateUser = await request(app).post('/school/login').send({
      email: 'example1@example.com',
      password: 'example',
    });

    const schoolTest = await request(app)
      .post('/school/schoolTests')
      .send({
        title: 'title test',
        subjects: 'test subject',
      })
      .set({
        authorization: `Bearer ${authenticateUser.body.token}`,
      });
    const { id } = schoolTest.body;
    const response = await request(app)
      .post('/school/question')
      .send({
        question: 'question test',
        test_id: id,
      })
      .set({
        authorization: `Bearer ${authenticateUser.body.token}`,
      });
    expect(newUser.status).toBe(201);
    expect(authenticateUser.status).toBe(200);
    expect(schoolTest.status).toBe(201);
    expect(response.status).toBe(201);
  });

  it('should  not be able create a new question with empty question', async () => {
    const newUser = await request(app).post('/school/users').send({
      name: 'example user 1',
      email: 'example2@example.com',
      password: 'example',
      teacher: true,
    });
    const authenticateUser = await request(app).post('/school/login').send({
      email: 'example2@example.com',
      password: 'example',
    });

    const schoolTest = await request(app)
      .post('/school/schoolTests')
      .send({
        title: 'title test',
        subjects: 'test subject',
      })
      .set({
        authorization: `Bearer ${authenticateUser.body.token}`,
      });
    const { id } = schoolTest.body;
    const response = await request(app)
      .post('/school/question')
      .send({
        test_id: id,
      })
      .set({
        authorization: `Bearer ${authenticateUser.body.token}`,
      });
    expect(newUser.status).toBe(201);
    expect(authenticateUser.status).toBe(200);
    expect(schoolTest.status).toBe(201);
    expect(response.status).toBe(400);
  });

  it('should  not be able create a new question with not authorized user', async () => {
    const newUser = await request(app).post('/school/users').send({
      name: 'example user 1',
      email: 'example3@example.com',
      password: 'example',
      teacher: false,
    });
    const authenticateUser = await request(app).post('/school/login').send({
      email: 'example3@example.com',
      password: 'example',
    });

    const schoolTest = await request(app)
      .post('/school/schoolTests')
      .send({
        title: 'title test',
        subjects: 'test subject',
      })
      .set({
        authorization: `Bearer ${authenticateUser.body.token}`,
      });
    const { id } = schoolTest.body;
    const response = await request(app)
      .post('/school/question')
      .send({
        question: 'question test',
        test_id: id,
      })
      .set({
        authorization: `Bearer ${authenticateUser.body.token}`,
      });
    expect(newUser.status).toBe(201);
    expect(authenticateUser.status).toBe(200);
    expect(schoolTest.status).toBe(401);
    expect(response.status).toBe(401);
  });
});

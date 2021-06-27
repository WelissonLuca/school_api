console.log('process.env.DATABaSE_URL: =>', process.env.DATABASE_URL);

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: { ssl: { rejectUnauthorized: false } },
  migrations: ['./dist/shared/infra/typeorm/migrations/**.js'],
  entities: ['./dist/modules/*/infra/typeorm/entities/**.js'],
  cli: {
    migrationsDir: './dist/shared/infra/typeorm/migrations',
    entities: './dist/modules/*/infra/typeorm/entities',
  },
};

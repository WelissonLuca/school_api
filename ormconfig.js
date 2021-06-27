console.log('process.env.DATABaSE_URL: =>', process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: { ssl: { rejectUnauthorized: false } },
  migrations: [
    './src/shared/infra/typeorm/migrations/**.ts' ||
      './dist/shared/infra/typeorm/migrations/**.js',
  ],
  entities: [
    './src/modules/*/infra/typeorm/entities/**.ts' ||
      './dist/modules/*/infra/typeorm/entities/**.js',
  ],
  cli: {
    migrationsDir:
      './src/shared/infra/typeorm/migrations' ||
      './dist/shared/infra/typeorm/migrations',
    entities:
      './src/modules/*/infra/typeorm/entities/**.ts' ||
      './dist/modules/*/infra/typeorm/entities/**.js',
  },
};

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAlternatives1624499351234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alternatives',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'alternative',
            type: 'varchar',
          },
          {
            name: 'question_id',
            type: 'varchar',
          },
          {
            name: 'correct',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FkAlternatives',
            referencedTableName: 'questions',
            referencedColumnNames: ['id'],
            columnNames: ['question_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('alternatives');
  }
}

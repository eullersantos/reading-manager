import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1638712731708 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'password', type: 'varchar' },
          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'username', type: 'varchar', isUnique: true },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

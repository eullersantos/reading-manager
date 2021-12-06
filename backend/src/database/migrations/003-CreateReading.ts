import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateReading1638717641779 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reading',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'userId', type: 'varchar' },
          { name: 'literaryWorkId', type: 'varchar' },
          { name: 'current_chapter', type: 'int' },
          { name: 'url_to_current_chapter', type: 'varchar', isUnique: true },
          { name: 'status', type: 'varchar' },
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

    await queryRunner.createForeignKey(
      'reading',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'reading',
      new TableForeignKey({
        columnNames: ['literaryWorkId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'literary_work',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reading');
  }
}

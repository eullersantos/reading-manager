import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLiteraryWork1638715264302 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "literary_work",
        columns: [
          { name: "id", type: "varchar", isPrimary: true },
          { name: "type", type: "varchar" },
          { name: "name", type: "varchar", isUnique: true },
          { name: "genre", type: "varchar" },
          { name: "home_page_url", type: "varchar" },
          { name: "cover_url", type: "varchar" },
          { name: "created_at", type: "timestamp", default: "now()" },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("literary_work");
  }
}

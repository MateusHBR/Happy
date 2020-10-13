import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class images1602610036144 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'orphanageId',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'ImageOrphanage',
            columnNames: ['orphanageId'],
            referencedTableName: 'orphanages',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('images', 'ImageOrphanage');
    await queryRunner.dropTable('images');
  }
}

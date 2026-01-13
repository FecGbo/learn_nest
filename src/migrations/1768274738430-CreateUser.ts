import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1768274738430 implements MigrationInterface {
    name = 'CreateUser1768274738430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`age\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`age\``);
    }

}

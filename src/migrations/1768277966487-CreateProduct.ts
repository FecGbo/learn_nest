import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1768277966487 implements MigrationInterface {
    name = 'CreateProduct1768277966487'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`price\` \`description\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`description\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` CHANGE \`description\` \`price\` int NOT NULL`);
    }

}

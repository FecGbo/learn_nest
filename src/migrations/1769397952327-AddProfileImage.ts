import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProfileImage1769397952327 implements MigrationInterface {
    name = 'AddProfileImage1769397952327'

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`ALTER TABLE profiles ADD COLUMN image VARCHAR(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE profiles DROP COLUMN image`);
    }

}

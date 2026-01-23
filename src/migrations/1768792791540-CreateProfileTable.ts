import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfileTable1768792791540 implements MigrationInterface {
    name = 'CreateProfileTable1768792791540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
            CREATE TABLE profiles(id INT AUTO_INCREMENT PRIMARY KEY,
            gender VARCHAR(100) NOT NULL,
            address VARCHAR(255)
            )
            `
        );
        await queryRunner.query(`ALTER TABLE user ADD COLUMN profileId INT UNIQUE`);

        await queryRunner.query(`
            ALTER TABLE user 
            ADD CONSTRAINT FK_user_profile
            FOREIGN KEY (profileId) REFERENCES profiles(id)`)
    }


    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            ALTER TABLE user DROP FOREIGN KEY FK_user_profile`)

        await queryRunner.query(`
            ALTER TABLE user DROP COLUMN profileId`)
        await queryRunner.query(`
            
            DROP TABLE profiles
            `)
    }




}

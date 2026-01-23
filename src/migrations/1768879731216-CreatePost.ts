import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePost1768879731216 implements MigrationInterface {
    name = 'CreatePost1768879731216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE posts(
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            userId INT,
            CONSTRAINT FK_post_user FOREIGN KEY (userId) REFERENCES user(id) on DELETE CASCADE
            )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE user DROP FOREIGN KEY FK_post_user
            `)
        await queryRunner.query(`
            DROP TABLE posts`)
    }

}

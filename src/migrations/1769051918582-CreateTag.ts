import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTag1769051918582 implements MigrationInterface {
    name = 'CreateTag1769051918582'

    public async up(queryRunner:QueryRunner):Promise<void>{
        await queryRunner.query(`
            CREATE TABLE tags(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL
            );
            
            `);


        await queryRunner.query(`
            CREATE TABLE post_tags(
            postId INT,
            tagId INT,
            PRIMARY KEY(postId,tagId),
            CONSTRAINT FK_post FOREIGN KEY (postId) REFERENCES posts(id), 
            CONSTRAINT FK_tag FOREIGN KEY (tagId) REFERENCES tags(id)
            
            );
            `)
    }
    public async down(queryRunner:QueryRunner):Promise<void>{
        await queryRunner.query(`DROP TABLE post_tags`);
        await queryRunner.query(`DROP TABLE tags`)
    }



}

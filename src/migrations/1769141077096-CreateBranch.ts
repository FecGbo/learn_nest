import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBranch1769141077096 implements MigrationInterface {
    name = 'CreateBranch1769141077096'

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`
            CREATE TABLE branch (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB
        `);
     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE branch`);
    }

}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity('branches')
export class TestBranch {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
}

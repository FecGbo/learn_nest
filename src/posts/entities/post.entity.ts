import { User } from "../../users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {
        @PrimaryGeneratedColumn()
        id:number;

        @Column()
        title:string;


        @Column({type:'text'})
        content:string;

        // @Column()
        // userId:number;

    //
        @ManyToOne(()=>User,(user)=>user.posts)
        user:User




}



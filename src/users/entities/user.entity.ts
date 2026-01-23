import { Post } from "../../posts/entities/post.entity";
import { Profile } from "../../profiles/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({unique:true})
    email:string

    @Column({ nullable: true })
    age: number;

    @OneToOne(()=>Profile,(profile)=>profile.user,{cascade:true})
    @JoinColumn()
    profile:Profile;




    @OneToMany(()=>Post,(post)=>post.user)
    posts:Post[]


    
    }

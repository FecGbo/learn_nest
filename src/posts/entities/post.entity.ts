import { Tag } from "src/tags/entities/tag.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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


        @ManyToMany(()=>Tag,(tag)=>tag.posts,{cascade:true})
        @JoinTable({name:"post_tags",
        joinColumn:{name:'postId',referencedColumnName:'id'},
        inverseJoinColumn:{name:'tagId',referencedColumnName:'id'}
        })
        tags:Tag[]




}



import { User } from "../../users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()

  id:number;

  @Column({nullable:false})
  gender:string

  // decorator run time
  @Column()
  address:string

  @Column({nullable:true})
  image:string

 //on no foreignKey Side
  @OneToOne(()=>User,(user)=>user.profile)
  user:User


}

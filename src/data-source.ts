import {DataSource} from 'typeorm';

export const AppDataSource=new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"cafe",
    entities:["dist/**/*.entity.js"],
    migrations:["dist/migrations/*.js"],
    // when change on entity ? change to database.
    synchronize:false,

})
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    @IsNotEmpty()
    content:string;


    @IsNumber()
    @IsNotEmpty()
    userId:number;


    @IsArray()
    @IsOptional()
    // check each index
    @IsNumber({},{each:true})
    
    tagIds?:number[];

}

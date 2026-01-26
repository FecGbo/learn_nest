import { IsString, MinLength } from "class-validator";

export class CreateTagDto {
    @IsString()
    @MinLength(2,{message:"At least 2 characters"})
    name:string;


}

import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { CreateProfileDto } from "src/profiles/dto/create-profile.dto";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3,{message:"Username must have 3 or greater"})
    name:string;


    @IsEmail({},{message:"Inalid Format"})
    email:string;

    @IsNumber()
    age:number

    @IsOptional()
    // inherit from  profileDto
    @ValidateNested()
    @Type(()=>CreateProfileDto)
    
    profile?:CreateProfileDto;
}

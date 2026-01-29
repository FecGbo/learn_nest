import { IsOptional, IsString, isString } from "class-validator";

export class CreateProfileDto {
    @IsString()
    
    gender:string;

    @IsString()
    @IsOptional()
    address:string;

    @IsString()
    @IsOptional()
    image:string;
}

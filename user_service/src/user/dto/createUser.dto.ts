import { IsNotEmpty, IsString } from 'class-validator';


export class createUserDTO {
    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    username: string
}
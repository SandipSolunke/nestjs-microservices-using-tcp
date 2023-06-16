import { IsNotEmpty, IsString } from "class-validator"


export class sendNotificationDTO {
    @IsNotEmpty()
    @IsString()
    user: string

    @IsNotEmpty()
    massage: string
}
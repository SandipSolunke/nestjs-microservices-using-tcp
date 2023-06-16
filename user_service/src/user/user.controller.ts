import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() CreateUserBody: createUserDTO) {
        console.log("create user request received")
        console.log("body :", CreateUserBody)
        return this.userService.addUser(CreateUserBody)
    }
}

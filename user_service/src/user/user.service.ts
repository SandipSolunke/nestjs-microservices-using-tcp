import { Inject, Injectable } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.dto';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class UserService {
    constructor(@Inject('notification') private readonly notificationClient: ClientProxy) { }

    users: any[] = [];

    addUser(UserBody: createUserDTO): any {
        this.users.push(UserBody);
        console.log("user added");

        const notificationBody = {
            "user": UserBody.email,
            "masage": "Welcome!"
        }

        this.notificationClient.emit('sendNotification', notificationBody)

        console.log("notification sent")

        return { "success": true, "msg": "User added successfully" }
    }
}

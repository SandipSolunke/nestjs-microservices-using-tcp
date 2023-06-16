import { Body, Controller, Post } from '@nestjs/common';
import { sendNotificationDTO } from './dto/sendNotification.dto';
import { NotificationService } from './notification.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';


@Controller('notification')
export class NotificationController {

    constructor(protected notificationService: NotificationService) { }

    @EventPattern('sendNotification')
    handleNotification(sendNotificationBody: sendNotificationDTO) {
        console.log("send notification request received")
        console.log("body :", sendNotificationBody)
        return this.notificationService.sendNotification(sendNotificationBody)
    }

}

import { Injectable } from '@nestjs/common';
import { sendNotificationDTO } from './dto/sendNotification.dto';

@Injectable()
export class NotificationService {

    sendNotification(notificationBody: sendNotificationDTO): any {
        //add code to send notification
        console.log("notification sent to user")
        return { "success": true, "msg": "notification sent successfullyi" }
    }
}

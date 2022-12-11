import { Component } from '@angular/core';

@Component({
  selector: 'notifcaitons-component',
  templateUrl: './app.notifications.components.html',
  styleUrls: ['./app.notifications.components.css']
})
export class Notificaitons{
  title = 'Notifications'

  getInfo(){
    return 'Successed create notifications message'
  }

  changeTitle(value: string) {
    this.title = value
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'notifcaitons-component',
  templateUrl: './app.notifications.components.html',
  styleUrls: ['./app.notifications.components.css']
})
export class Notificaitons{
  title = 'This compoent using Google Translate API'

  translatedValue: string = 'Here will be your text'

  changeTitle(value: string) {
    this.title = value
  }
}
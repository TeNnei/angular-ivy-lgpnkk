import { Component } from '@angular/core';
import {TranslateService} from './TranslateService/translate.service'

@Component({
  selector: 'notifcaitons-component',
  templateUrl: './app.notifications.components.html',
  styleUrls: ['./app.notifications.components.css']
})
export class Notificaitons{
  title = 'This compoent using Google Translate API'

  value: string = 'Here will be your text'

  translatedValue: string = ''

  translateMethod(value: string) {
    
  }
}
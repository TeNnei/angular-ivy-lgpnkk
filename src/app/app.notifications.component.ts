import { Component } from '@angular/core';
import {TranslateService} from './TranslateService/translate.service'
import {TranslateObject} from './TranslateService/translate.object'

@Component({
  selector: 'notifcaitons-component',
  templateUrl: './app.notifications.components.html',
  styleUrls: ['./app.notifications.components.css']
})
export class Notificaitons{
  public title = 'This compoent using Google Translate API'

  public value: string = 'Here will be your text'

  public traslatedObject: TranslateObject = new TranslateObject('','ru-RU','en_EN','text')

  private httpTranslate: TranslateService

  translateMethod() {
    this.httpTranslate.translate(this.traslatedObject).subscribe({
      next: (data: any) => {this.value = data},
      error: error=> console.log(error)
    })
  }
}
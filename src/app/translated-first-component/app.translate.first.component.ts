import { Component } from '@angular/core';
import {TranslateService} from '../TranslateService/translate.service'
import {TranslateObject} from '../TranslateService/translate.object'

@Component({
  selector: 'translated-first-component',
  templateUrl: './app.translate.first.components.html',
  styleUrls: ['./app.translate.first.components.css'],
  providers: [TranslateService]
})
export class TranslateFirstComponent{

  public title = 'This compoent using Google Translate API'

  public value: string = 'Here will be your text'

  public traslatedObject: TranslateObject = new TranslateObject('','ru-RU','uz-UZ','text')

 
}
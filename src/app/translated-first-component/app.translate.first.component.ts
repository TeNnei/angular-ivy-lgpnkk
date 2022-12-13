import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../TranslateService/translate.service'
import {TranslateObject} from '../TranslateService/translate.object'

@Component({
  selector: 'translated-first-component',
  templateUrl: './app.translate.first.components.html',
  styleUrls: ['./app.translate.first.components.css'],
})
export class TranslateFirstComponent implements OnInit{

  constructor(private translateServise: TranslateService){}


  ngOnInit(): void{

  }

  public languageSize: string[] = ['uz', 'ru', 'en']

  public title = 'This compoent using Google Translate API'

  public traslatedObject: TranslateObject = new TranslateObject('','ru-RU','uz-UZ','text')

  translateMethod() {
    this.translateServise.translate(this.traslatedObject)
  }
}
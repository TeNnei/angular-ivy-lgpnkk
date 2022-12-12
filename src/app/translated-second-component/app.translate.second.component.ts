import { Component } from '@angular/core';
import {TranslateService} from '../TranslateService/translate.service'
import {TranslateObject} from '../TranslateService/translate.object'

@Component({ 
selector: 'translated-second-component',
templateUrl: './app.translate.second.component.html',
styleUrls: ['./app.translate.second.component.css'],
providers: [TranslateService]}
)
export class TranslateSecondElement{

  constructor(private httpTranslate: TranslateService){}

  public value: string = 'Here will be your text'

  public traslatedObject: TranslateObject = new TranslateObject('','ru-RU','uz-UZ','text')

  translateMethod() {
    this.httpTranslate.translate(this.traslatedObject).subscribe((results: any) => { 
      console.log(results)
      this.value = results.body.data.translations[0].translatedText;
    })
  }
}
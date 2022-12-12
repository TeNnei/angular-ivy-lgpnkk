import { Component, Input } from '@angular/core';
import {TranslateService} from '../TranslateService/translate.service'
import {TranslateObject} from '../TranslateService/translate.object'

@Component({ 
selector: 'translated-second-component',
templateUrl: './app.translate.second.component.html',
styleUrls: ['./app.translate.second.component.css'],
providers: [TranslateService]}
)
export class TranslateSecondElement{

  constructor(private translateServise: TranslateService){}

  value: string = this.translateServise.getValue()

}
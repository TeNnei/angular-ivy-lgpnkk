import { Component, EventEmitter, Input, Output} from '@angular/core';
import {TranslateService} from '../TranslateService/translate.service'
import {TranslateObject} from '../TranslateService/translate.object'

@Component({ 
selector: 'translated-second-component',
templateUrl: './app.translate.second.component.html',
styleUrls: ['./app.translate.second.component.css']
})
export class TranslateSecondElement{

  @Input() asd: string

  @Output() asdChange: EventEmitter<string> = new EventEmitter()

  constructor(private translateServise: TranslateService){}

  value: string = this.translateServise.getValue()

}
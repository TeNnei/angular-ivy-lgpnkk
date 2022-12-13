import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '../TranslateService/translate.service'


@Component({ 
selector: 'translated-second-component',
templateUrl: './app.translate.second.component.html',
styleUrls: ['./app.translate.second.component.css']
})
export class TranslateSecondElement implements OnInit{

  constructor(private translateServise: TranslateService){}

  value: string = 'Hello here you translated text'

  ngOnInit(): void {
    this.translateServise.translatedText$.subscribe((text) => this.setValue(text));
  }

  setValue(translatedText: string): void {
    this.value = translatedText;
  }
  

}
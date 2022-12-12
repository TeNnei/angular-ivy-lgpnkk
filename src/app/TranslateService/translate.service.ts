import { Injectable } from '@angular/core';
import {TranslateObject} from './translate.object';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TranslateService {

  constructor(private http: HttpClient){}

  public value: string = "Hello here your text"

  translate(translateObject: TranslateObject){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('X-goog-api-key', '');

    this.http.post('https://translation.googleapis.com/language/translate/v2', translateObject, {headers: headers, observe: "response"}).subscribe((results: any) => { 
      console.log(results)
      this.setValue(results.body.data.translations[0].translatedText);
    })
  }

  private setValue(translatedValue: string){
    this.value = translatedValue;
  }

  public getValue(): string {
    return this.value
  }
  
}
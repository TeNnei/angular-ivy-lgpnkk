import { Injectable } from '@angular/core';
import {TranslateObject} from './translate.object';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TranslateService {

  constructor(private http: HttpClient){}

  translate(translateObject: TranslateObject){

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('X-goog-api-key', '');


     return this.http.post('https://translation.googleapis.com/language/translate/v2', translateObject, {headers: headers, observe: "response"})
  }
  
}
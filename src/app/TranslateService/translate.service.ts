import { Injectable } from '@angular/core';
import {TranslateObject} from './translate.object';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient){}

  public translatedText$ = new Subject<string>()

  translate(translateObject: TranslateObject){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')
    .set('X-goog-api-key', '');

    this.http.post('https://translation.googleapis.com/language/translate/v2', translateObject, {headers: headers, observe: "response"}).subscribe((results: any) => { 
      console.log(results)
      this.translatedText$.next(results.body.data.translations[0].translatedText);
    })
  }

  
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'
import { TranslateFirstComponent } from './translated-first-component/app.translate.first.component'
import { TranslateSecondElement } from './translated-second-component/app.translate.second.component'
import { TranslateService } from './TranslateService/translate.service'



@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    HttpClientModule 
  ],
  declarations: [
    AppComponent,
    TranslateFirstComponent,
    TranslateSecondElement
    ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
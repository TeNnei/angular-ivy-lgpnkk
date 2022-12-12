import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'
import { TranslateFirstComponent } from './translated-first-component/app.translate.first.component'



@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    HttpClientModule 
  ],
  declarations: [
    AppComponent,
    TranslateFirstComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
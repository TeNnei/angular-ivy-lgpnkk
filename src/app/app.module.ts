import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'
import { Notificaitons } from './app.notifications.component'



@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    HttpClientModule 
  ],
  declarations: [
    AppComponent,
    Notificaitons
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
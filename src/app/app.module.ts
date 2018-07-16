import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RotateComponent } from './rotate/rotate.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    RotateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RotateComponent } from './rotate/rotate.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './/app-routing.module'
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandardService } from './standard.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RotateComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StandardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotateComponent } from './rotate/rotate.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'rotate', component: RotateComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

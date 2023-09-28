import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from "./app.component";
import { CreatePersonComponent } from "./person/create-person/create-person.component";
import { LandingComponent } from "./landing/landing.component";
import {GetPersonComponent} from "./person/get-person/get-person.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'create-person',
    component: CreatePersonComponent
  },
  {
    path: 'get-person',
    component: GetPersonComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

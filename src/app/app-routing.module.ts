import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from "./app.component";
import { InputInterfaceComponent } from "./input-interface/input-interface.component";
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'input-interface',
    component: InputInterfaceComponent
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

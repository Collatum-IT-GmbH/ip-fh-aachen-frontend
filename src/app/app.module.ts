import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import { GetPersonComponent } from './person/get-person/get-person.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { GetPersonDialogComponent } from './person/get-person/get-person-dialog/get-person-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { UpdatePersonComponent } from './person/update-person/update-person.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    LandingComponent,
    HeaderComponent,
    GetPersonComponent,
    GetPersonDialogComponent,
    UpdatePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

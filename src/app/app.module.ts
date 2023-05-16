import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFarmComponent } from './components/farms-add/add-farm/add-farm.component';
import { FarmsListComponent } from './components/farms-list/farms-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { EditFarmComponent } from './components/edit-farm/edit-farm/edit-farm.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegistratonComponent } from './components/registration/registraton/registraton.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GameComponent } from './components/game/game.component';
import { DeathComponent } from './components/death/death.component';
import { HeadersInterceptor } from './headers.interceptor';


import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { GraphComponent } from './graph/graph.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    CanvasJSChart,
    FarmsListComponent,
    AddFarmComponent,
    UsersListComponent,
    EditFarmComponent,
    AuthComponent,
    RegistratonComponent,
    UploadfileComponent,
    PetListComponent,
    AddPetComponent,
    EditPetComponent,
    ProfileComponent,
    GameComponent,
    DeathComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
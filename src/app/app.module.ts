import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    FarmsListComponent,
    AddFarmComponent,
    UsersListComponent,
    EditFarmComponent,
    AuthComponent,
    RegistratonComponent,
    UploadfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

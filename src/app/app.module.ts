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

@NgModule({
  declarations: [
    AppComponent,
    FarmsListComponent,
    AddFarmComponent,
    UsersListComponent,
    EditFarmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

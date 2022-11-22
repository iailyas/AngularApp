import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { EditFarmComponent } from './components/edit-farm/edit-farm/edit-farm.component';
import { AddFarmComponent } from './components/farms-add/add-farm/add-farm.component';

import { FarmsListComponent } from './components/farms-list/farms-list.component';
import { RegistratonComponent } from './components/registration/registraton/registraton.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'Profile',
    component: UsersListComponent
  },
  {
    path: 'Farm',
    component: FarmsListComponent
  },
  {
    path: 'AddFarmToUser',
    component: AddFarmComponent
  },
  {
    path: 'AddFarmToUser',
    component: AddFarmComponent
  },
  {
    path: 'Farm/:id',
    component: EditFarmComponent
  },
  {
    path: 'AddUser',
    component: RegistratonComponent
  },
  {
    path: 'UploadImage',
    component: UploadfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFarmComponent } from './components/edit-farm/edit-farm/edit-farm.component';
import { AddFarmComponent } from './components/farms-add/add-farm/add-farm.component';

import { FarmsListComponent } from './components/farms-list/farms-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { AuthComponent } from './components/auth/auth.component';
import { EditFarmComponent } from './components/edit-farm/edit-farm/edit-farm.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { AddFarmComponent } from './components/farms-add/add-farm/add-farm.component';

import { FarmsListComponent } from './components/farms-list/farms-list.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { RegistratonComponent } from './components/registration/registraton/registraton.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { DeathComponent } from './components/death/death.component';
import { GameComponent } from './components/game/game.component';
import { NewprofileComponent } from './components/newprofile/newprofile.component';
import { GraphComponent } from './graph/graph.component';


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
    path: 'NewProfile',
    component: NewprofileComponent
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
  },
  {
    path: 'Farm/PetByFarmIdFarmId/:id',
    component: PetListComponent
  },
  {
    path: 'AddPetToFarm/:id',
    component: AddPetComponent
  },
  {
    path: 'Farm/PetByFarmIdFarmId/:id/:id',
    component: EditPetComponent
  },
  {
    path: 'Farm/PetByFarmIdFarmId/:id/Game/:id',
    component: GameComponent
  },
  {
    path: 'Death/:id',
    component: DeathComponent
  },
  {
    path: 'Chart',
    component: GraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

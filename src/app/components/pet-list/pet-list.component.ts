import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { PetsService } from 'src/app/services/pets.service';
import { AddPetComponent } from '../add-pet/add-pet.component';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  id: number | undefined;
  constructor(private route: ActivatedRoute, private petsService: PetsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (Number(id)) { this.petsService.GetByFarmId(Number(id)).subscribe({ next: (response) => { this.pets = response } }) };

      }
    });

    this.petsService.GetAll()
      .subscribe({
        next: (pet) => { this.pets = pet; console.log(this.pets); },
        error: (response: any) => { console.log(response); }
      })

  }
  AddPet() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (Number(id)) { this.router.navigate(['AddPetToFarm/' + Number(id)]); };

      }
    });

  }
}



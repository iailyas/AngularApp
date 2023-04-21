import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  constructor(private petsService: PetsService) { }

  ngOnInit(): void {

    this.petsService.GetAll()
      .subscribe({
        next: (pet) => { this.pets = pet; console.log(this.pets); },
        error: (response: any) => { console.log(response); }
      })
  }
}



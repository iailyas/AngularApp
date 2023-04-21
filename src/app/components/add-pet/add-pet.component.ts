import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  farmId: number = 1;
  addPetRequest: Pet = {
    id: '',
    name: '',
    type: '',
    happiness_days_count: 0,
    feeding_period: 0,
    thist_quenching: 0
  };
  constructor(private petsService: PetsService, private router: Router) { }

  ngOnInit(): void {
  }
  AddPet() {
    this.petsService.Add(this.farmId, this.addPetRequest)
      .subscribe({

        next: (response: any) => { this.router.navigate(['Farm']); },
        error: (response: any) => { console.log(response); }

      });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  farmId: number | undefined;
  addPetRequest: Pet = {
    id: '',
    name: '',
    type: '',
    happiness_days_count: 0,
    feeding_period: 0,
    thist_quenching: 0
  };
  constructor(private route: ActivatedRoute, private petsService: PetsService, private router: Router) { }

  ngOnInit(): void {

  }
  AddPet() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        this.farmId = Number(id);
        this.petsService.Add(Number(id), this.addPetRequest)

          .subscribe({

            next: (response: any) => { this.petsService.Add(Number(id), this.addPetRequest); this.router.navigate(['Farm']); },
            error: (response: any) => { console.log(response); }

          });



      },
      error: (response: any) => { console.log(response); }
    });


  }
}

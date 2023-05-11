import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { PetsService } from 'src/app/services/pets.service';
import { AddPetComponent } from '../add-pet/add-pet.component';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];
  id: number | undefined;
  responce: any;
  constructor(private route: ActivatedRoute, private petsService: PetsService, private router: Router, private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (Number(id)) {
          this.petsService.GetByFarmId(Number(id)).subscribe({
            next: (response) => {
              this.pets = response; this.petsService.UpdateStatsByFarmId(Number(id)).subscribe({
                next: (response: any) => { console.log(response) },
                error: (response: any) => { console.log(response) }
              });
            }
          })
        };

      }
    });

    // this.petsService.GetAll()
    //   .subscribe({
    //     next: (pet) => { this.pets = pet; console.log(this.pets); },
    //     error: (response: any) => { console.log(response); }
    //   })

  }
  SetPetId(type: string, id: string) {
    this.scoreService.GetScore(Number(id)).subscribe({
      next: (response: any) => {
        this.responce = response; console.log(response); this.scoreService.Score = response;
        if (this.scoreService.Score == 0) {
          if (Number(id)) {
            this.scoreService.PetId = Number(id);
            console.log(this.scoreService.PetId);
            //  this.scoreService.Score = 0;
            this.router.navigate(['/Farm/PetByFarmIdFarmId/' + Number(id) + '/Game/' + Number(type)]);
          }
        }
        else {
          this.router.navigate(['Death/' + Number(id)]);
        }
      },
      error: (response: any) => { console.log(response); }
    });




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



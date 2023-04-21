import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';
import { FarmService } from 'src/app/services/farm.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  petId: number = 3;
  petDetail: Pet = {
    id: '',
    name: '',
    type: '',
    happiness_days_count: 0,
    feeding_period: 0,
    thist_quenching: 0
  };
  constructor(private route: ActivatedRoute, private petsService: PetsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (Number(id)) { this.petsService.GetById(Number(id)).subscribe({ next: (response) => { this.petDetail = response } }) };
        console.log(this.petDetail);
      }
    });
  }

  updatePet() {
    this.petsService.Update(Number(this.petDetail.id), this.petDetail).subscribe({
      next: (params) => this.router.navigate(['Pet']),
      error: (response: any) => { console.log(response); }
    });
    console.log(this.petDetail);
  }
  deletePet(id: string) {

    this.petsService.Delete(Number(this.petDetail.id)).subscribe(
      {
        next: (params) => { this.router.navigate(['Pet']) },
        error: (response: any) => { console.log(response); }
      }
    )
  }

}




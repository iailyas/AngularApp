import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Falsy } from 'rxjs';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-edit-farm',
  templateUrl: './edit-farm.component.html',
  styleUrls: ['./edit-farm.component.css']
})
export class EditFarmComponent implements OnInit {
  farmDetail: Farm = {
    id: '',
    name: '',
    dead_pets_count: 0,
    alive_pets_count: 0,
    average_feeding_period: 0,
    average_thirst_quenching: 0,
    average_pet_happiness: 0,
    average_pets_age: 0
  };
  constructor(private route: ActivatedRoute, private farmService: FarmService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (Number(id)) { this.farmService.GetById(Number(id)).subscribe({ next: (response) => { this.farmDetail = response } }) };
        console.log(this.farmDetail);
      }
    });
  }
  updateFarm() {
    this.farmService.Update(Number(this.farmDetail.id), this.farmDetail).subscribe({
      next: (response: any) => this.router.navigate(['Farm']),
      error: (response: any) => { console.log(response); }
    });
    console.log(this.farmDetail);
  }
}


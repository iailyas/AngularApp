import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.css']
})
export class AddFarmComponent implements OnInit {
  userId: number = 0;
  addFarmRequest: Farm = {
    id: '',
    name: '',
    dead_pets_count: 0,
    alive_pets_count: 0,
    average_feeding_period: 0,
    average_thirst_quenching: 0,
    average_pet_happiness: 0,
    average_pets_age: 0
  };
  constructor(private farmService: FarmService, private router: Router) { }

  ngOnInit(): void {
  }
  AddFarm() {
    this.farmService.Add(this.addFarmRequest)
      .subscribe({ next: (farm) => { this.router.navigate(['Farm']); } });

  }

}

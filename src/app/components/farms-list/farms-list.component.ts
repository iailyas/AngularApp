import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';
import { PetsService } from 'src/app/services/pets.service';


@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.css']
})
export class FarmsListComponent implements OnInit {
  farms: Farm[] = [];
  userName: string = '';
  constructor(private farmService: FarmService, private petsService: PetsService) { }
  ngOnInit(): void {
    // this.farmService.GetCurrentUser()
    // this.farmService.GetCurrentUser()
    //   .subscribe({
    //     next: (user: string) => {
    //       this.userName = user; console.log(this.userName); this.farmService.GetAll(this.userName)
    //         .subscribe({
    //           next: (farm) => { console.log(this.userName), this.farms = farm; console.log(this.farms); },
    //           error: (response: any) => { console.log(response); }
    //         })
    //     },
    //     error: (response: any) => { console.log(response); }
    //   })

    this.farmService.GetCurrentUserFarms()
      .subscribe({
        next: (response: any) => { this.farms = response; console.log(response) },
        error: (response: any) => { console.log(response) }
      });
  }
  setCurrentFarmId(id: string) {
    if (Number(id))
      this.petsService.currentFarmId = Number(id);
  }
}

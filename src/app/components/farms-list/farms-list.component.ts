import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm.model';
import { FarmService } from 'src/app/services/farm.service';


@Component({
  selector: 'app-farms-list',
  templateUrl: './farms-list.component.html',
  styleUrls: ['./farms-list.component.css']
})
export class FarmsListComponent implements OnInit {
  farms: Farm[] = [];
  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
    this.farmService.GetAll()
      .subscribe({
        next: (farm) => { this.farms = farm; console.log(this.farms); },
        error: (response: any) => { console.log(response); }
      })
  }
}

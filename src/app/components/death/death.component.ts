import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})
export class DeathComponent implements OnInit {
  Score: number | undefined;
  constructor(private scoreService: ScoreService) {

  }

  ngOnInit(): void {
    this.Score = this.scoreService.Score;
  }

}

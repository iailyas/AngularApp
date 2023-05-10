import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { ScoreService } from '../../services/score.service';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})
export class DeathComponent implements OnInit {
  Score: number | undefined;
  constructor(private scoreService: ScoreService, private gameService: GameService) {

  }

  ngOnInit(): void {
    // this.scoreService.GetScore(Number(id))
    this.Score = this.scoreService.Score;
    this.scoreService.Score = 0;
    this.gameService.tamagochi.Score = 0;


  }

}

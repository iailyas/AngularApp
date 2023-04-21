import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Subscription, interval } from 'rxjs';
import { Tamagochi } from '../../models/Tamagochi.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  subscription: Subscription | undefined;
  Tamagochis: Tamagochi = {
    Hunger: 100,
    Play: 100,
    Score: 0,
    Sleep: 100,
    Look: "♡＼(❤˘⌣˘❤)／♡"
  };
  @Output() ChangeLook: EventEmitter<any> = new EventEmitter();


  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = interval(5000).subscribe(x => {
      this.Game();
    })

  }
  // DecSleep() {
  //   this.gameService.DecSleep().subscribe({
  //     next: (sleep: number) => { this.Tamagochis.Sleep = sleep; },
  //     error: (response: any) => { console.log(response); }
  //   })
  //   this.gameService.IncScore().subscribe({
  //     next: (score: number) => { this.Tamagochis.Score = score; console.log(score); },
  //     error: (response: any) => { console.log(response); }
  //   })
  // }
  // IncScore() {
  //   this.gameService.IncScore().subscribe({
  //     next: (score: number) => { this.Tamagochis.Score = score; },
  //     error: (response: any) => { console.log(response); }
  //   })
  // }
  Game() {
    this.gameService.GameCotroller().subscribe({
      next: (tamagochi) => { this.Tamagochis = tamagochi; },
      error: (response: any) => { console.log(response); }
    })
  }

  Check() {
    if (this.Tamagochis.Hunger == 0) {
      this.ChangeLook.emit();
    }
    this.ChangeLook.emit();
  }

  ClickSleep() {
    if (this.Tamagochis.Sleep < 95) {
      this.Tamagochis.Sleep = this.Tamagochis.Sleep + 5;
    }


  }
  ClickFeed() {
    if (this.Tamagochis.Hunger < 95) {
      this.Tamagochis.Hunger = this.Tamagochis.Hunger + 5;
    }


  }


  ClickPlay() {
    if (this.Tamagochis.Play < 95) {
      this.Tamagochis.Play = this.Tamagochis.Play + 5;
    }


  }


}

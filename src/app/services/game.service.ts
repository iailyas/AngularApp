import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tamagochi } from '../models/Tamagochi.model';
import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseApiUrl: string = environment.baseApiUrl;
  tamagochi: Tamagochi = {
    Hunger: 100,
    Play: 100,
    Score: 0,
    Sleep: 100,
    Look: "♡＼(❤˘⌣˘❤)／♡"
  };

  constructor(private scoreService: ScoreService, private http: HttpClient, private router: Router) {

  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  // SetSleep(): number {
  //   var number = this.GetSleep();
  //   return number + 5;
  // }
  GetSleep(): number {
    return this.tamagochi.Sleep;
  }

  GetHunger(): number {
    return this.tamagochi.Hunger;
  }

  GetPlay(): number {
    return this.tamagochi.Play;
  }

  GetScore(): number {
    return this.tamagochi.Score;
  }
  StartGame(): Observable<Tamagochi> {
    return of(this.tamagochi);
  }
  IncScore(): Observable<number> {
    this.tamagochi.Score += 1;
    return of(this.tamagochi.Score);
  }
  DecSleep(): Observable<number> {
    this.tamagochi.Score = this.tamagochi.Score - this.getRandomInt(25);
    return of(this.tamagochi.Score);
  }
  ChangeLook(router: Router) {
    if (this.tamagochi.Hunger < 90 || this.tamagochi.Play < 90 || this.tamagochi.Sleep < 90) {
      this.tamagochi.Look = "＼( ❤‿❤ *)／";
    }
    if (this.tamagochi.Hunger < 85 || this.tamagochi.Play < 85 || this.tamagochi.Sleep < 85) {
      this.tamagochi.Look = "ヽ(￣～￣　)ノ";
    }
    if (this.tamagochi.Hunger < 80 || this.tamagochi.Play < 80 || this.tamagochi.Sleep < 80) {
      this.tamagochi.Look = "(ｏ・_・)";
    }
    if (this.tamagochi.Hunger < 75 || this.tamagochi.Play < 75 || this.tamagochi.Sleep < 75) {
      this.tamagochi.Look = "(o-_-o)";
    }
    if (this.tamagochi.Hunger < 70 || this.tamagochi.Play < 70 || this.tamagochi.Sleep < 70) {
      this.tamagochi.Look = "(｡•́︿•̀｡)";
    }
    if (this.tamagochi.Hunger < 55 || this.tamagochi.Play < 55 || this.tamagochi.Sleep < 55) {
      this.tamagochi.Look = "(￣□￣」)";
    }
    if (this.tamagochi.Hunger < 35 || this.tamagochi.Play < 35 || this.tamagochi.Sleep < 35) {
      this.tamagochi.Look = "＼(〇_ｏ)／";
    }
    if (this.tamagochi.Hunger < 25 || this.tamagochi.Play < 25 || this.tamagochi.Sleep < 25) {
      this.tamagochi.Look = "ヽ(‵﹏´)ノ";
    }
    if (this.tamagochi.Hunger < 10 || this.tamagochi.Play < 10 || this.tamagochi.Sleep < 10) {
      this.tamagochi.Look = "٩(╬ʘ益ʘ╬)۶";
    }
    if (this.tamagochi.Hunger < 5 || this.tamagochi.Play < 5 || this.tamagochi.Sleep < 5) {
      this.tamagochi.Look = "~(>_<~)";
    }
    if (this.tamagochi.Hunger < 3 || this.tamagochi.Play < 3 || this.tamagochi.Sleep < 3) {

      this.tamagochi.Look = "ψ(▼へ▼メ)～→";
      timer(3000);
      this.scoreService.Score = this.tamagochi.Score;
      router.navigate(['Death']);

    }
  }

  GameCotroller(): Observable<Tamagochi> {
    if (this.tamagochi.Play > 0 && this.tamagochi.Hunger > 0 && this.tamagochi.Sleep > 0) {
      this.tamagochi.Play = this.tamagochi.Play - this.getRandomInt(25);
      this.tamagochi.Hunger = this.tamagochi.Hunger - this.getRandomInt(25);
      this.tamagochi.Sleep = this.tamagochi.Sleep - this.getRandomInt(25);
      this.tamagochi.Score = this.tamagochi.Score + 1;
      this.ChangeLook(this.router);
      return of(this.tamagochi);
    }
    else {
      this.tamagochi.Hunger = 0;
      this.tamagochi.Play = 0;
      this.tamagochi.Sleep = 0;
      return of(this.tamagochi);
    }

  }
}

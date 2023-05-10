import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Look } from 'F:/prog/myrepository/Angular/AngularApp/src/app/models/Look.model';
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
    Look: ''
  };
  Looks: Look[] = [];

  constructor(private scoreService: ScoreService, private http: HttpClient, private router: Router) {

  }
  GetLook(type: number): Observable<any> {
    this.tamagochi = {
      Hunger: 100,
      Play: 100,
      Score: 0,
      Sleep: 100,
      Look: ''
    };
    return this.http.get(this.baseApiUrl + '/Look/GetById/' + type);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ChangeLook(router: Router) {
    if (this.tamagochi.Hunger < 90 || this.tamagochi.Play < 90 || this.tamagochi.Sleep < 90) {
      this.tamagochi.Look = this.Looks.at(0)!.body;
    }
    if (this.tamagochi.Hunger < 85 || this.tamagochi.Play < 85 || this.tamagochi.Sleep < 85) {
      this.tamagochi.Look = this.Looks.at(1)!.body;
    }
    if (this.tamagochi.Hunger < 80 || this.tamagochi.Play < 80 || this.tamagochi.Sleep < 80) {
      this.tamagochi.Look = this.Looks.at(2)!.body;
    }
    if (this.tamagochi.Hunger < 75 || this.tamagochi.Play < 75 || this.tamagochi.Sleep < 75) {
      this.tamagochi.Look = this.Looks.at(3)!.body;
    }
    if (this.tamagochi.Hunger < 70 || this.tamagochi.Play < 70 || this.tamagochi.Sleep < 70) {
      this.tamagochi.Look = this.Looks.at(4)!.body;
    }
    if (this.tamagochi.Hunger < 55 || this.tamagochi.Play < 55 || this.tamagochi.Sleep < 55) {
      this.tamagochi.Look = this.Looks.at(5)!.body;
    }
    if (this.tamagochi.Hunger < 35 || this.tamagochi.Play < 35 || this.tamagochi.Sleep < 35) {
      this.tamagochi.Look = this.Looks.at(6)!.body;
    }
    if (this.tamagochi.Hunger < 25 || this.tamagochi.Play < 25 || this.tamagochi.Sleep < 25) {
      this.tamagochi.Look = this.Looks.at(7)!.body;
    }
    if (this.tamagochi.Hunger < 10 || this.tamagochi.Play < 10 || this.tamagochi.Sleep < 10) {
      this.tamagochi.Look = this.Looks.at(8)!.body;
    }
    if (this.tamagochi.Hunger < 5 || this.tamagochi.Play < 5 || this.tamagochi.Sleep < 5) {
      this.tamagochi.Look = this.Looks.at(9)!.body;
    }
    if (this.tamagochi.Hunger < 3 || this.tamagochi.Play < 3 || this.tamagochi.Sleep < 3) {

      this.tamagochi.Look = this.Looks.at(10)!.body;

      console.log(this.scoreService.PetId);
      console.log(this.tamagochi.Score);
      this.scoreService.UpdateScore(this.scoreService.PetId, this.tamagochi.Score).subscribe({
        next: (response: any) => {
          console.log(response); this.scoreService.Score = this.tamagochi.Score;
          timer(3000);
          this.router.navigate(['Death/' + this.scoreService.PetId]);
        },
        error: (response: any) => { console.log(response); }
      });



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

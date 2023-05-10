import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Subscription, interval } from 'rxjs';
import { Tamagochi } from '../../models/Tamagochi.model';
import { Look } from 'F:/prog/myrepository/Angular/AngularApp/src/app/models/Look.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Tamagochis: Tamagochi = {
    Hunger: 100,
    Play: 100,
    Score: 0,
    Sleep: 100,
    Look: ''
  };
  Looks: Look[] = [];
  @Output() ChangeLook: EventEmitter<any> = new EventEmitter();
  subscription: Subscription | undefined;


  constructor(private route: ActivatedRoute, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) => {
        this.Tamagochis.Hunger = 100;
        this.Tamagochis.Play = 100;
        this.Tamagochis.Sleep = 100;
        this.Tamagochis.Score = 0;


        const id = params.get('id');
        if (Number(id)) {
          this.gameService.GetLook(Number(id)).subscribe({
            next: (response: Look[]) => {
              this.Looks = response; this.Tamagochis.Look = this.Looks.at(0)!.body;
              console.log(response);
              this.gameService.tamagochi.Look = this.Looks.at(0)!.body;
              this.gameService.Looks = response;

              // this.subscription?.closed;
              this.subscription = interval(5000)
                .subscribe(x => {
                  this.Game();
                })
            },
            error: (response: any) => { console.log(response); }
          })
          // this.subscription = interval(5000).subscribe(x => {
          //   this.Game();
          // })
        };

      }
    });



  }
  ngOnDestroy() {
    this.subscription?.unsubscribe(); // Unsubscribe Observable 1

  }


  Game() {
    this.gameService.GameCotroller().subscribe({
      next: (tamagochi) => { this.Tamagochis = tamagochi; },
      error: (response: any) => { console.log(response); }
    })
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

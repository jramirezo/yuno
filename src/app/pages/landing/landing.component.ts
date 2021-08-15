import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  games: Game[] | undefined;
  constructor(private gameService: GameService,
              config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;

  }

  ngOnInit(): void {
    // this.cargarGames;
    // console.log('aaaa');

    this.gameService.getGames().subscribe({
      next: res => {
        this.games = res;
        console.log('aaaa');
      }, error: err => {
        console.log(err);
      }
    });

  }

  // cargarGames(): void{
  //   this.gameService.getGames().subscribe({
  //     next: res => {
  //       this.games = res;       
  //       console.log('aaaa');
  //     }, error: err => {
  //       console.log(err);
  //     }
  //   });
  // }


}

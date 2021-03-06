import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  games: Game[] | undefined;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // this.cargarGames;
    // console.log('aaaa');

    this.gameService.getGames().subscribe({
      next: res => {
        this.games = res;
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

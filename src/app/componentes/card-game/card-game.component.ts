import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  @Input()
  game: Game = new Game;

  // @Input()
  // idGame: string | undefined;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    // this.gameService.getGame('game-1').subscribe({
    //   next: res => {
    //     this.game = res;       
    //     console.log(this.game);       
    //   }, error: err => {
    //     console.log(err);
    //   }
    // });
  }
}

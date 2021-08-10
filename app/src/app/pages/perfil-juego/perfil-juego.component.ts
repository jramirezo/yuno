import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-perfil-juego',
  templateUrl: './perfil-juego.component.html',
  styleUrls: ['./perfil-juego.component.css']
})
export class PerfilJuegoComponent implements OnInit {


  game: Game = new Game; 

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getGame('game-1').subscribe({
      next: res => {
        this.game = res;       
        console.log(this.game);       
      }, error: err => {
        console.log(err);
      }
    });
  }

}

import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-perfil-juego',
  templateUrl: './perfil-juego.component.html',
  styleUrls: ['./perfil-juego.component.css']
})
export class PerfilJuegoComponent implements OnInit {


 // @Input()
  game: Game = new Game; 

  @Input()
  idGame: string | undefined; 

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

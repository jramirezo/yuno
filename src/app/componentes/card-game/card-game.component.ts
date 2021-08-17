import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/app/models/Game';
import { PerfilJuegoComponent } from 'src/app/pages/perfil-juego/perfil-juego.component';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  @Input()
  game: Game = new Game; 

  constructor(private gameService: GameService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  ver(): void{

    const dialogRef = this.dialog.open(PerfilJuegoComponent, {
      width: '600px',
      height: '800px',
      data: this.game
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}

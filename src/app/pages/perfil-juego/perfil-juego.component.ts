import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-perfil-juego',
  templateUrl: './perfil-juego.component.html',
  styleUrls: ['./perfil-juego.component.css']
})
export class PerfilJuegoComponent implements OnInit {

  idGame: string = ''; 

  constructor(private gameService: GameService,
     private rutaActiva: ActivatedRoute,
     public dialogRef: MatDialogRef<PerfilJuegoComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Game,
     ) { }

  ngOnInit(): void {
 
  }

  comprar(): void {
    this.dialogRef.close();
  }

}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import {Game} from '../../models/Game';
import {Platform} from '../../models/Platform';

@Component({
  selector: 'app-form-juego',
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css']
})
export class FormJuegoComponent implements OnInit {

  FormJuegos: FormGroup = new FormGroup({
    NombreJuego: new FormControl('', Validators.required),
    DescripcionJuego: new FormControl('', Validators.required),
    PrecioJuego: new FormControl('', Validators.required),
    TamanoJuego: new FormControl('', Validators.required),
    CoverUrlJuego: new FormControl('', Validators.required),
    PictureUrlJuego: new FormControl('', Validators.required),
  });

  constructor(private gameService: GameService) { }

  ngOnInit(): void { 
  }

  agrergarJuego(): void{

    let newGame: Game = {
      id: '',
      gameId: '',
      type: 'game',
      personId: 'person-1',
      name: this.FormJuegos.get('NombreJuego')?.value,
      description: this.FormJuegos.get('DescripcionJuego')?.value,
      price: this.FormJuegos.get('PrecioJuego')?.value,
      size: this.FormJuegos.get('TamanoJuego')?.value,
      cover: this.FormJuegos.get('CoverUrlJuego')?.value,
      picture: this.FormJuegos.get('PictureUrlJuego')?.value,
      platforms: [{name:"Wii"},{name:"Switch"}],
      categories: [{name:"2D"},{name:"Shooter"}],
    };

    this.gameService.addGame(newGame)
    .subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );

    this.gameService.getGames();
  }

}

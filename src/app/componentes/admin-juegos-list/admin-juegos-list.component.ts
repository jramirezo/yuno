import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Prueba } from 'src/app/models/Prueba';
import { GameService } from 'src/app/services/game.service';
import {Game} from '../../models/game';


@Component({
  selector: 'app-admin-juegos-list',
  templateUrl: './admin-juegos-list.component.html',
  styleUrls: ['./admin-juegos-list.component.css']
})
export class AdminJuegosListComponent implements OnInit {



  dataJuegos: Game[] = [];

  prueba: Prueba | undefined;

  displayedColumns: string[] = ['id', 'nombre', 'precio'];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getPrueba().subscribe({
      next: res => {
        this.prueba = res;
        console.log(this.prueba);
      }, error: err => {
        console.log(err);
      }
    });

    }

  }



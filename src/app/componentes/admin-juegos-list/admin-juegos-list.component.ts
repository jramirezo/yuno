import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Prueba } from 'src/app/models/Prueba';
import { GameService } from 'src/app/services/game.service';
import {Game} from '../../models/Game';


@Component({
  selector: 'app-admin-juegos-list',
  templateUrl: './admin-juegos-list.component.html',
  styleUrls: ['./admin-juegos-list.component.css']
})
export class AdminJuegosListComponent implements OnInit {

  dataJuegos = new MatTableDataSource<Game>();
  prueba: Prueba | undefined;
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'editar', 'eliminar'];

  constructor(private gameService: GameService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    // this.gameService.getGames().subscribe({
    //   next: res => {
    //     this.dataJuegos.data = res;       
    //     console.log(this.dataJuegos.data);
    //   }, error: err => {
    //     console.log(err);
    //   }
    // });

    this.cargarJuegos();
  }

  editar(game: Game): void {

  }

  eliminar(game: Game): void {
    this.gameService.deleteGame(game).subscribe({
      next: res =>{
        this._snackBar.open("Se ha eliminado el juego", "cerrar");   
        this.cargarJuegos();
      }, error: err => {
        this._snackBar.open("No se pudo eliminar", "cerrar")
      }
    })
  }

  cargarJuegos(): void {
    this.gameService.getGames().subscribe({
      next: res => {
        this.dataJuegos.data = res;       
       // console.log(this.dataJuegos.data);
      }, error: err => {
        console.log(err);
      }
    });
  }
}



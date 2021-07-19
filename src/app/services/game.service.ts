import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Game} from '../models/Game';
import { Prueba } from '../models/Prueba';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  _baseUrl = 'http://localhost:8080/games/';

  constructor(private http: HttpClient) { }


    // getPrueba(): Observable<Prueba>{
    //   return this.http.get<Prueba>(this._baseUrl); 
    // }


    getGames(): Observable<Game[]>{
      return this.http.get<Game[]>(this._baseUrl);
    }

    getGame(id: string): Observable<Game>{
      return this.http.get<Game>(this._baseUrl+id);
    }

    addGame(newGame: Game): Observable<Game>{
      console.log(JSON.stringify(newGame));
      console.log(this.http.post<Game>(this._baseUrl+"saveGame",JSON.stringify(newGame)));
      return this.http.post<Game>(this._baseUrl+"saveGame",newGame);
    }

}

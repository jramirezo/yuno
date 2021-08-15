import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Game} from '../models/Game';
import {environment} from '../../environments/environment.prod';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private API_URL = environment.API_URL; 

  constructor(private http: HttpClient) { }


    getGames(): Observable<Game[]>{
      console.log('entro');
      return this.http.get<Game[]>(`${this.API_URL}games`);
    }

    getGame(id: string): Observable<Game>{
      return this.http.get<Game>(`${this.API_URL}games/${id}`);
    }

    addGame(newGame: Game): Observable<Game>{
      console.log(JSON.stringify(newGame));
      console.log(this.http.post<Game>(this.API_URL+"saveGame",JSON.stringify(newGame)));
      return this.http.post<Game>(this.API_URL+"saveGame",newGame);
    }

}

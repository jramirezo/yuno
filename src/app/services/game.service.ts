import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Game} from '../models/Game';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private API_URL = environment.API_URL; 

  constructor(private http: HttpClient) { }


    getGames(): Observable<Game[]>{
      return this.http.get<Game[]>(`${this.API_URL}/games`);
    }

    getGame(id: string): Observable<Game>{
      return this.http.get<Game>(`${this.API_URL}/games/${id}`);
    }

}

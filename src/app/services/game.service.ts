import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Game} from '../models/game';
import { Prueba } from '../models/Prueba';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  _baseUrl = 'http://localhost:8081/prueba/';

  constructor(private http: HttpClient) { }


  getPrueba(): Observable<Prueba>{
    return this.http.get<Prueba>(this._baseUrl); 
  }


}

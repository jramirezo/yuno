import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL; 

  constructor(private http: HttpClient) { }

  login(user: string, password: string){
    return this.http.post(this.API_URL+'user', {user, password}).pipe(
      map((response: any) => {
        const user = response;
        if(response.result.succeeded){
          localStorage.setItem('token', response.token)
        }
      })      
    )
  }
  
}

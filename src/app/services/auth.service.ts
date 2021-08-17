import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/User';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL; 

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User>{
    // return this.http.post(this.API_URL+'user', {user, password}).pipe(
    //   map((response: any) => {
    //     const user = response;
    //     if(response.result.succeeded){
    //       localStorage.setItem('token', response.token)
    //     }
    //   })      
    // )
    return this.http.post<User>(this.API_URL+"user", user);
  }
  
}

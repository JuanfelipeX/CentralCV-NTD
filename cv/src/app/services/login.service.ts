import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  logIn(user: any) {
    return this.http.post<any>(this.URL + '/login', user); 
  }
}

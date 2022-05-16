import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  signup(user: any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

}

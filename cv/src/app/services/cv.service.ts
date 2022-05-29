import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class datosPersonalesService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  newDatosPersonales(data: any): Observable<any>{
    return this.http.post<any>(this.URL + '/datosPersonales', data);
  }
}


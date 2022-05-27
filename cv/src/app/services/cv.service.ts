import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  datosPersonales(datosPersonales: any){
    return this.http.post<any>(this.URL + '/datosPersonales', datosPersonales); 
  }
  estudios(estudios: any){
    return this.http.post<any>(this.URL + '/estudio', estudios); 
  }
  experiencia(experiencia: any){
    return this.http.post<any>(this.URL + '/experiencia', experiencia); 
  }
}

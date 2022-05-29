import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { datosPersonalesService } from '../../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: 'cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  datosPersonales = {
    fechaNacimiento: '',
    identificacion: '',
    telefono: '',
    pais: '',
    departamento: '',
    ciudad: '',
    genero: '',
    perfilProfesional: '',
    nivelEstudios: '',
    titulos: '',
    descripcion: '',
    centrosEducativos: '',
    duracion: '',
    lugar: '',
    cargo: '',
    nombreEmpresa: '',
    duracion2: ''
  }
  constructor(private datosPersonalesService: datosPersonalesService, private router: Router, private http: HttpClient, 
     private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //this.http.put<any>().subscribe({
      
    //})
  }

  Datos(){
    this.datosPersonalesService.newDatosPersonales(this.datosPersonales).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/cv"]);
      },
      (err: any) => {
        console.log(err);
        alert("Usuario No Encontrado")
      }
  )}
}
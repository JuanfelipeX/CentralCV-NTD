import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
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
    perfilProfesional: ''
  }
  estudios = {
    nivelEstudios: '',
    titulos: '',
    descripcion: '',
    centrosEducativos: '',
    duracion: '',
    lugar: ''
  }
  experiencia = {
    cargo: '',
    nombreEmpresa: '',
    duracion: ''
  }
  constructor() {}

  ngOnInit(): void {}
}

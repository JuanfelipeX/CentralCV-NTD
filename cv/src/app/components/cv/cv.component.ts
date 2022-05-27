import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../../services/cv.service';

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
  constructor(private CvService: CvService, private router: Router) {}

  ngOnInit(): void {}

  cv() {
    this.CvService.datosPersonales(this.datosPersonales).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/cv"]);
      },
      (err: any) => {
        console.log(err);
        alert("Usuario No Encontrado")
      }
    );
    this.CvService.estudios(this.estudios).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/cv"]);
      },
      (err: any) => {
        console.log(err);
        alert("Usuario No Encontrado")
      }
    );
    this.CvService.experiencia(this.experiencia).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/cv"]);
      },
      (err: any) => {
        console.log(err);
        alert("Usuario No Encontrado")
      }
    );
    //console.log(this.user);
  }
}

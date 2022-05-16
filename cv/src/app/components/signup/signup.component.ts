import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user = {
    nombre: '',
    apellidos: '',
    correo: '',
    clave: '',
    departamento: '',
    puestoDeTrabajo: '',
  };

  constructor(private singupservice: SignupService, private router: Router) {}

  ngOnInit(): void {}

  signup() {
    this.singupservice.signup(this.user).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err: any) => {
        console.log(err);
        alert('Error al Crear la Cuenta o Usuario Ya Existente');
      }
    );
    //console.log(this.user);
  }
}

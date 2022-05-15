import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    correo: '',
    clave: '',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  logIn() {
    this.loginService.logIn(this.user).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    //console.log(this.user);
  }
}

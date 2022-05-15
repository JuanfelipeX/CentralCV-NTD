import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    this.loginService.logIn(this.user).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/cv"]);
      },
      (err: any) => {
        console.log(err);
      }
    );
    //console.log(this.user);
  }
}

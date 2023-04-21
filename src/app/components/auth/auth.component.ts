import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/response';
import { UserLogin } from 'src/app/models/UserLogin';
import { UserRegister } from 'src/app/models/userRegister';
import { AuthService } from 'src/app/services/auth.service';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  userLogin: UserLogin = {
    userName: '',
    password: ''
  };
  responce: AuthResponse = {
    status: '',
    message: ''
  };
  userRegister: UserRegister = {
    first_Name: '',
    last_Name: '',
    role: '',
    userName: '',
    password: '',
    email: ''
  };
  constructor(private auth: AuthService, private router: Router, private jwt: JwtService) { }

  ngOnInit(): void {

  }
  Login() {
    console.log(this.userLogin);
    this.auth.login(this.userLogin).subscribe({
      next: (response: any) => { this.responce = response; console.log(response), this.jwt.token = response, console.log(this.jwt.token), this.router.navigate(['Profile']); },
      error: (response: any) => { console.log(response) }
    });
  }
  Register() {
    this.router.navigate(['AddUser']);
    console.log(this.userRegister);
  }
}

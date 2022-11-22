import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/response';
import { UserLogin } from 'src/app/models/UserLogin';
import { UserRegister } from 'src/app/models/userRegister';
import { AuthService } from 'src/app/services/auth.service';

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
    // userName: '',
    // password: '',
    email: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  Login() {
    this.auth.login(this.userLogin).subscribe({
      next: (response: any) => { this.responce = response; this.router.navigate(['Profile']); },
      error: (response) => { this.responce = response; }
    });
  }
  Register() {
    this.router.navigate(['AddUser']);
    console.log(this.userRegister);
  }
}

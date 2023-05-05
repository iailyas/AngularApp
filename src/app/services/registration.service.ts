import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentUserRegister } from '../models/currentUserRegister';
import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseApiUrl: string = environment.baseApiUrl;
  currentUser: CurrentUserRegister = {
    userName: '',
    password: '',
    email: ''
  };
  constructor(private http: HttpClient) { }
  AddRegister(user: CurrentUserRegister) {
    this.currentUser.email = user.email;
    this.currentUser.password = user.password;
    this.currentUser.userName = user.userName;
    return this.http.post<any>(this.baseApiUrl + '/register', this.currentUser)
  }
  Add(user: UserRegister, image?: File): Observable<any> {
    this.currentUser.email = user.email;
    this.currentUser.password = user.password;
    this.currentUser.userName = user.userName;
    const fd = new FormData();
    if (image) {
      fd.append('avatar', image);
    }
    fd.append('first_Name', user.first_Name);
    fd.append('last_Name', user.last_Name);
    fd.append('userName', user.userName);
    fd.append('password', user.password);
    fd.append('email', user.email);
    this.AddRegister(this.currentUser);
    return this.http.post<any>(this.baseApiUrl + '/User', fd);
  }
}

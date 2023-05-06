import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseApiUrl: string = environment.baseApiUrl;
  userName: string = '';
  Users: User[] = [{
    id: 0,
    first_Name: '',
    last_Name: '',
    role: '',
    userName: '',
    email: '',
    avatar: ''
  }];
  constructor(private http: HttpClient) { }

  GetAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + '/User')
  }

  GetCurrentUserName(): Observable<User> {
    return this.http.get<User>(this.baseApiUrl + '/Authenticate/CurrentUser');
  }
  GetCurrentUserByName(username: string): Observable<User[]> {
    console.log("Current");
    console.log(username);
    let apiURL = `${this.baseApiUrl}/current/${username}`;
    return this.http.get<User[]>(apiURL);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../models/UserLogin';
import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  public register(user: UserRegister) {
    return this.http.post<any>(this.baseApiUrl + '/User', user);
  }

  public login(user: UserLogin): Observable<string> {
    return this.http.post(this.baseApiUrl + '/login', user, { responseType: 'text' });
  }
}

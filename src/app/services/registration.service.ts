import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  Add(user: UserRegister, image?: File): Observable<any> {
    const fd = new FormData();
    if (image) {
      fd.append('avatar', image, image.name);
    }
    fd.append('first_Name', user.first_Name);
    fd.append('last_Name', user.last_Name);
    // fd.append('userName', user.userName);
    // fd.append('password', user.password);
    fd.append('email', user.email);
    return this.http.post<any>(this.baseApiUrl + '/User', fd);
  }
}

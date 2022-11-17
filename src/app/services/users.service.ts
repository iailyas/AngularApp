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
  constructor(private http: HttpClient) { }

  GetAll() : Observable<User[]> {
    return this.http.get<User[]>(this.baseApiUrl + '/User')
  }
  
}

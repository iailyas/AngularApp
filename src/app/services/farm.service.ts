import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Farm } from '../models/farm.model';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetCurrentUser(): Observable<string> {
    return this.http.get(this.baseApiUrl + '/Authenticate/CurrentUserByName', { responseType: 'text' });
  }
  GetAll(username: string): Observable<Farm[]> {
    console.log('ADDA');
    console.log(username);
    return this.http.get<Farm[]>(this.baseApiUrl + '/Authenticate/CurrentUserFarms' + username);
  }
  Add(addFarmRequest: Farm) {
    return this.http.post(this.baseApiUrl + '/AddFarmCurrentUser', addFarmRequest);
  }
  GetById(farmId: number): Observable<Farm> {
    return this.http.get<Farm>(this.baseApiUrl + '/Farm/' + farmId);
  }
  Update(farmId: number, updateFarmRequest: Farm): Observable<Farm> {
    return this.http.patch<Farm>(this.baseApiUrl + '/Farm/' + farmId, updateFarmRequest);

  }
  Delete(farmId: number): Observable<Farm> {
    return this.http.delete<Farm>(this.baseApiUrl + '/Farm/' + farmId);

  }
  GetCurrentUserFarms(): Observable<Farm[]> {
    return this.http.get<Farm[]>(this.baseApiUrl + '/Authenticate/CurrentUserFarms');
  }
}

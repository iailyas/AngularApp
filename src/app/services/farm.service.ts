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
    return this.http.get(this.baseApiUrl + '/Authenticate/CurrentUser', { responseType: 'text' });
  }
  GetAll(username: string): Observable<Farm[]> {
    console.log('ADDA');
    console.log(username);
    return this.http.get<Farm[]>(this.baseApiUrl + '/Farm/CurrentUserFarms?name=' + username);
  }
  Add(userId: number, addFarmRequest: Farm): Observable<Farm> {
    return this.http.post<Farm>(this.baseApiUrl + '/AddFarmToUser?id=' + userId, addFarmRequest);
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
}

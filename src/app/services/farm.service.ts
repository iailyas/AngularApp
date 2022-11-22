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

  GetAll(): Observable<Farm[]> {
    return this.http.get<Farm[]>(this.baseApiUrl + '/Farm');
  }
  Add(userId: number, addFarmRequest: Farm): Observable<Farm> {
    return this.http.post<Farm>(this.baseApiUrl + '/AddFarmToUser?id=' + userId, addFarmRequest);
  }
  GetById(farmId: number): Observable<Farm> {
    return this.http.get<Farm>(this.baseApiUrl + '/Farm/' + farmId);
  }
  Update(farmId: number, updateFarmRequest: Farm): Observable<Farm> {
    return this.http.put<Farm>(this.baseApiUrl + '/Farm/?id=' + farmId, updateFarmRequest);

  }
  Delete(farmId: number): Observable<Farm> {
    return this.http.delete<Farm>(this.baseApiUrl + '/Farm/' + farmId);

  }
}

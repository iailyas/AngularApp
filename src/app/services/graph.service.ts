import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Graph } from '../models/Graph.Model';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetAll(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/Authenticate/CurrentUserPetsChart');
  }

}

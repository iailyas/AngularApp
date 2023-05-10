import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  baseApiUrl: string = environment.baseApiUrl;
  Score: number | undefined;
  PetId: number | undefined;
  UpdatePetRequest: Pet = {
    id: '',
    name: '',
    type: '',
    happiness_days_count: 0,
    feeding_period: 0,
    thist_quenching: 0
  };
  constructor(private http: HttpClient) { }


  GetScore(id: number): Observable<number> {
    return this.http.get<number>(this.baseApiUrl + '/Pet/GetPetScore/' + id);
  }
  UpdateScore(id: number | undefined, score: number): any {
    this.UpdatePetRequest.happiness_days_count = score
    return this.http.patch<any>(this.baseApiUrl + '/Pet/SetPetScore/' + id + '?score=' + score, this.UpdatePetRequest.happiness_days_count);
  }
}

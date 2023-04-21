import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  GetAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseApiUrl + '/Pet');
  }
  Add(farmId: number, addPetRequest: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseApiUrl + '/AddPetToFarm?id=' + farmId, addPetRequest);
  }
  GetById(petId: number): Observable<Pet> {
    return this.http.get<Pet>(this.baseApiUrl + '/Pet/' + petId)
  }
  Update(petId: number, updatePetRequest: Pet): Observable<Pet> {
    return this.http.patch<Pet>(this.baseApiUrl + '/Pet/' + petId, updatePetRequest);
  }
  Delete(petId: number): Observable<Pet> {
    return this.http.delete<Pet>(this.baseApiUrl + '/Pet/' + petId);
  }
  // Add(userId: number, addFarmRequest: Pet): Observable<Pet> {
  //   return this.http.post<Farm>(this.baseApiUrl + '/AddFarmToUser?id=' + userId, addFarmRequest);
  // }
  // GetById(farmId: number): Observable<Farm> {
  //   return this.http.get<Farm>(this.baseApiUrl + '/Farm/' + farmId);
  // }
  // Update(farmId: number, updateFarmRequest: Farm): Observable<Farm> {
  //   return this.http.put<Farm>(this.baseApiUrl + '/Farm/?id=' + farmId, updateFarmRequest);

  // }
  // Delete(farmId: number): Observable<Farm> {
  //   return this.http.delete<Farm>(this.baseApiUrl + '/Farm/' + farmId);

  // }
}

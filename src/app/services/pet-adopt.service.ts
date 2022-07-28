import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Adoption, AdoptionList } from '../model/adoption.model';
import { Pet, PetList } from '../model/pet.model';

const baseURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class PetAdoptService {
  constructor(private http: HttpClient) {}

  getPets(params?: any): Observable<PetList> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('filter', (params.filter && JSON.stringify(params.filter)) || '')
          .set('sort', params.sort || ''),
      };
    }

    return this.http.get(`${baseURL}/pets`, queryParams).pipe(
      map((data: any) => {
        return new PetList(data);
      })
    );
  }

  getOne(id: number): Observable<Pet> {
    return this.http.get(`${baseURL}/pets/${id}`).pipe(
      map((x) => {
        return new Pet(x);
      })
    );
  }

  postAdoption(adoption: Adoption): Observable<Adoption> {
    return this.http.post(`${baseURL}/adoptions`, adoption).pipe(
      map((data: any) => {
        return new Adoption(data);
      })
    );
  }

  getAdoptions(): Observable<AdoptionList> {
    return this.http.get(`${baseURL}/adoptions`).pipe(
      map((x) => {
        return new AdoptionList(x);
      })
    );
  }

  deleteAdoption(id: number) {
    return this.http.delete(`${baseURL}/adoptions/${id}`);
  }
}

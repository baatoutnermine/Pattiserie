import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Sweets } from 'src/sweets';
import { Categorie } from 'src/categorie';
@Injectable({
  providedIn: 'root'
})
export class SweetsService {



  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getSweets() {
    const apiUrl = `${this.apiUrl}/sweets/listeSweets`;
    return this.http.get<Sweets[]>(apiUrl);
  }
  getCategorie() {
    const apiUrl = `${this.apiUrl}/categorie/`;
    return this.http.get<Categorie[]>(apiUrl);
  }

  public addProduct(product :FormData):Observable<any> {
    const apiUrl = `${this.apiUrl}/sweets/createsweets`;
    return this.http.post<Sweets>(this.apiUrl,product);
  }
}

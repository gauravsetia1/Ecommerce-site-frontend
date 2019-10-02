import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  getDetails(id) {
    const url = 'http://localhost:8080/api/items/' + id;
    return this.http.get(url);
  }
}

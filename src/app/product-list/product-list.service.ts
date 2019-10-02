import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }

  getListFromServer() {
    /* const url = './assets/products.json';*/

    const url = 'http://localhost:8080/api/items';
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }

  getListFromServer() {
    const url = 'http://localhost:8080/api/items';
    return this.http.get(url);
  }

  getCategory(var1) {
    const url = 'http://localhost:8080/api/category/' + var1;
    return this.http.get(url);
  }

  getByCategoryAndPrice(category, price1, price2) {
    const url = 'http://localhost:8080/api/' + category + '/' + price1 + '/' + price2;
    return this.http.get(url);
  }
}

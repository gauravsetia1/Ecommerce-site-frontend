import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  list;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getListFromServer().subscribe((data) => {
      this.list = data;
    });
  }

  getListFromServer() {
    const url = './assets/products.json';
    return this.http.get(url);
  }
}

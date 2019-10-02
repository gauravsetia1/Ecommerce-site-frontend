import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductListService} from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  list;
  constructor(private productListService: ProductListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productListService.getListFromServer().subscribe((data) => {
      this.list = data;
    });
  }

  onSelect(product) {
    this.router.navigate(['/home', product.id]);
  }
}

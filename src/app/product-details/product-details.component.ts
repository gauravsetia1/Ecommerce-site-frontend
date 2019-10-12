import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductDetailsService} from './product-details.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId;

  constructor(private productDetailsService: ProductDetailsService, private appService: AppService, private router: Router, private route: ActivatedRoute) {
  }

  productDetail = {};

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.productId = id;
    }),
      this.productDetailsService.getDetails(this.productId).subscribe((data) => {
        this.productDetail = data;
      });
  }

  addItemsinCart() {
    this.productDetailsService.addToCart(this.productId).subscribe((data) => {
      this.productDetail = data;
      setTimeout(() => {
        console.log('added to cart');
      }, 1000);
      this.router.navigate(['/mycart']);
    });
  }

}

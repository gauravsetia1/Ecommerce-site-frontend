import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductDetailsService} from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId;
  constructor(private productDetailsService: ProductDetailsService , private router: Router, private route: ActivatedRoute) { }

  productDetail;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.productId = id;
    }),
    this.productDetailsService.getDetails(this.productId).subscribe((data) => {
      this.productDetail = data;
    });
  }

}

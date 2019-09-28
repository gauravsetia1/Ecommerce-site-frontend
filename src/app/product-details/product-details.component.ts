import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  productDetail = {
    name: 'Iphone XS',
    image: './assets/images/iphone.PNG',
    spec: '3GB|64GB|3000mAH',
    price: '1999'
  };
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.productId = id;
    });
  }

}

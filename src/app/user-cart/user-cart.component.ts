import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor() { }

  product = {
    name: 'Iphone XS',
    image: './assets/images/iphone.PNG',
    spec: '3GB|64GB|3000mAH',
    price: '1999'
  };

  ngOnInit() {
  }
}

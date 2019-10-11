import { Component, OnInit } from '@angular/core';
import {ProductDetailsService} from '../product-details/product-details.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserCartService} from './user-cart.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  product;

  constructor(private appService: AppService, private userCartService: UserCartService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.appService.showCart().subscribe((data) => {
      this.product = data;
      console.log(data);
    });
  }

  up(id) {
    this.userCartService.increment1(id).subscribe((data3) => {
      console.log(data3);
      this.appService.showCart().subscribe((data1) => {
        this.product = data1;
      });
    });
  }

  down(id) {
    this.userCartService.decrement1(id).subscribe((data4) => {
      console.log(data4);
      this.appService.showCart().subscribe((data1) => {
        this.product = data1;
      });
    });
  }

  remove(id) {
    this.userCartService.deleteItem(id).subscribe((data) => {
      /*this.product = data;*/
      this.appService.showCart().subscribe((data1) => {
        this.product = data1;
      });
    });
}
}

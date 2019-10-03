import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomePageService} from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  list;
  category1;

  constructor(private homePageService: HomePageService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.homePageService.getListFromServer().subscribe((data) => {
      this.list = data;
    });
  }

  onSelect(product) {
    this.router.navigate(['/home', product.id]);
  }

  category(cat) {
    this.category1 = cat;
    this.homePageService.getCategory(cat).subscribe((data) => {
      this.list = data;
    });
  }

  categoryAndPrice(p1, p2) {
    this.homePageService.getByCategoryAndPrice(this.category1, p1, p2).subscribe((data) => {
      this.list = data;
    });
  }
}

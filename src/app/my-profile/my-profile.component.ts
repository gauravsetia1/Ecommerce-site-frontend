import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MyProfileService} from './my-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  userImg = './assets/images/user.PNG';
  users;
  constructor(private myProfileService: MyProfileService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myProfileService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

}

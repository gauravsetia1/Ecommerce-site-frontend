import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private appService: AppService, private router: Router) { }
  name;
  phone;
  gender;
  email;
  password;
  cpassword;
  url = 'http://localhost:8080/users/addUsers';
  ngOnInit() {
    if (this.appService.checkLogin()) {
      this.router.navigate(['/home']);
    }
  }
  finalData() {
    // tslint:disable-next-line:triple-equals
    if (this.password == this.cpassword) {
      if (this.email != null && this.password != null && this.name != null && this.phone != null && this.gender != null) {
      const ar = {email: this.email,  password: this.password, name: this.name, phone: this.phone, gender: this.gender};
      return this.http.post(this.url, ar).subscribe(data => {
          this.router.navigate(['/login']);
        });
      } else {
        alert('fill all fields');
      }
    } else {
      alert('Re-Enter password');
    }
}


}

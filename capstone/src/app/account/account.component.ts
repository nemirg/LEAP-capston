import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  user: string = '';
  pass: string = '';
  isLoggedIn: boolean = false;

  constructor(public loginSrv: LoginService) { }

  ngOnInit() {
    this.isLoggedIn = this.loginSrv.isLoggedIn
  }

  login() {
    this.isLoggedIn = this.loginSrv.login(this.user, this.pass)
  }

  logout() {
    this.loginSrv.isLoggedIn = false;
    this.isLoggedIn = false;
    this.loginSrv.user = "Guest";
    this.user = "";
    this.pass = "";
  }

}

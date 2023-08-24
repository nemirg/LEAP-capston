import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  user: string = "Guest"

  constructor() { }

  login(user: string, pass: string): boolean {
    if ((user === 'Cindy' || (user === 'Steve')) && ((user === 'Cindy' || (user === 'Steve')))) {
      this.isLoggedIn = true;
      this.user = user
      return true
    } else {
      return false;
    }
  }
}

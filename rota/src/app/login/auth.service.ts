import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  doLogin(user: User) {

    if(user.email == "rafael@gmail.com" &&
    user.password == "123456") {
      this._userIsAuthenticated = true;

      this.showMenuEmitter.emit(true)

      this._router.navigate(['/'])
    } else {
      this.showMenuEmitter.emit(false)
      this. _userIsAuthenticated = false;
    }

  }

  isAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor(
    private _router: Router
  ) { }
}

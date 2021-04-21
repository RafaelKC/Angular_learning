import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  email: string = '';

  doLogin() {
    this._authService.doLogin(this.user);
  }

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}

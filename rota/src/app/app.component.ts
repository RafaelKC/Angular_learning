import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rota';

  showMenu: boolean = false;

  constructor(
    private _authService: AuthService
  ) {

  }

  ngOnInit() {
    this._authService.showMenuEmitter.subscribe(
      (msg: boolean) => {
        this.showMenu = msg;
      }
    );
  }

}

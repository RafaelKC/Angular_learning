import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.verificarAcesso();
  }


  private verificarAcesso() : boolean {
    if(this._authService.isAuthenticated()){
      return true;
    }

    this._router.navigate(['/login'])

    return false;
  }


  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("CanLoad")
    
    return this.verificarAcesso();
  }

  
}

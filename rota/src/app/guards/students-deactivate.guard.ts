import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { FormCanDeactivate } from '../students/form';

@Injectable({
  providedIn: 'root'
})
export class StudentsDeactivateGuard implements CanDeactivate<FormCanDeactivate> {
  canDeactivate(
    component: FormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(!component.podeMudar()) {
        return confirm("Tem certeza que deseja sair dessa página? Alterações fitas não serão salvas")
      }
      return true;
      
  }
  
}

import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { authservice } from './authguardservice';
@NgModule(
  {

  }
)

export class AuthguardGuard implements CanActivate {
  constructor(private authservce:authservice,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |Promise<boolean>|boolean {
    return this.authservce.isAthenticated().then(
      (authinticated: boolean) => {
        if (authinticated) {
          return true;
        }
        else {
          this.router.navigate(['/']);
           return false;
        }
      });
  }
  
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private oidcSecurityService: OidcSecurityService
  ) {}

  public isAuthenticated: boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.oidcSecurityService.checkAuth().pipe(
        map((isAuthenticated) => {
          console.log(isAuthenticated+"ahihi")
          // allow navigation if authenticated
          if (isAuthenticated) {
            return true;
          }
  
          // redirect if not authenticated
          return this.router.parseUrl('/welcome');
        })
      );
  }
  
}

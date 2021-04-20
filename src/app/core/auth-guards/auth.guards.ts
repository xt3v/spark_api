import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private _route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isLoggedIn()) {
      if (this.auth.hasWebDashboardAccess()) {
        return true;

      } else {
        this._route.navigate(['/signin'], {
          queryParams: { returnUrl: state.url },
        });
        return false;

      }
    }
    this._route.navigate(['/signin'], {
      queryParams: { returnUrl: state.url },
    });
    return false;

  }
}

// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsertokenService } from '../services/usertoken.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userToken: UsertokenService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Replace this with your actual logic to get the user type
    const userType = this.userToken.getuser();
    
    //This condition is to check the usertype and select the path 
    if (this.userToken.isAuthenticated()) {
      switch (userType) {
        case 'user':
          if (state.url.includes('/user')) {
            return true;
          }
          break;

        case 'company':
          if (state.url.includes('/company')) {
            return true;
          }
          break;

        case 'admin':
          if (state.url.includes('/admin')) {
            return true;
          }
          break;

        default:
          this.router.navigate(['/']);
          return false;
      }
    }

    // Redirect to homepage for unauthenticated users
    return this.router.navigate(['/']);
  }
}
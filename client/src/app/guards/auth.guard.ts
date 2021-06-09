import { ErrorHandlingService } from './../services/errorHandling/error-handling.service';
import { AuthService } from './../services/authService/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private errorService: ErrorHandlingService) { }
 
 
  canActivate(route: ActivatedRouteSnapshot) {
    // Get the potentially required role from the route
    const expectedRole = route.data?.role || null;
 
    return this.authService.getUser().pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1),
      map(user => {
        console.log("in authGuard",user)
        if (!user) {
          this.errorService.errorMessage("Check");
          return this.router.parseUrl('/')
        } else {
          let role = user.role;
          console.log(role)
          console.log("expected",expectedRole)
 
          if (!expectedRole || expectedRole == role) {
            return true;
          } else {
            this.errorService.errorMessage("Not authorized to access page");
            return false;
          }
        }
      })
    )
  }
}

import { AlertService } from './../services/alertService/alert.service';
import { AuthService } from './../services/authService/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router } from '@angular/router';
import { take, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private alert: AlertService) { }
 
 
  canActivate(route: ActivatedRouteSnapshot) {
    // Get the potentially required role from the route
    const expectedRole = route.data?.role || null;
 
    return  this.authService.getUser().pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1),
      map(user => {
        if (!user) {
          return this.router.parseUrl('/login')
        } else {
          let role = user.role; 
          if (!expectedRole || expectedRole == role) {
            return true;
          } else {
            this.alert.errorMessageAlert("Not authorized to access page");
            return false;
          }
        }
      })
    )
  }
}

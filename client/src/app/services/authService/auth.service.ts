import { ErrorHandlingService } from './../errorHandling/error-handling.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from '../StorageService/storage.service';
import { Router } from '@angular/router';
import { catchError, take, tap } from 'rxjs/operators';

const TOKEN_KEY = 'access_token';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private storage: StorageService,
    private helper: JwtHelperService,
    private http: HttpClient,
    private errorService: ErrorHandlingService
  ) {
    this.loadUser();
  }
  url = environment.url;
  user = null;

 async loadUser() {
   await this.storage.get(TOKEN_KEY).then((res) => {
      if (res) {
        this.user = this.helper.decodeToken(res);
        this.currentUser.next(this.user);
        this.navigateOnRole(this.user);
      } else {
        this.currentUser.next(false);
      }
    });
  }

  signin(credentials) {
    return this.http.post<any>(`${this.url}/signin`, credentials).pipe(
      tap(async (res) => {
        await this.storage.set(TOKEN_KEY, res.token);
        this.user = await this.helper.decodeToken(res.token);
        this.currentUser.next(this.user);
      }),
      catchError((error) => {
        if (error.error) {
          return this.errorService.errorMessage(error.error.message);
        } else {
          console.log(error);
        }
      })
    );
  }

  navigateOnRole(user) {
    if (user.role === 0) {
      this.router.navigateByUrl('/admin-dashboard',{replaceUrl: true })
    } else if (user.role === 1) {
      this.router.navigateByUrl('/showroom-dashboard',{replaceUrl: true })
    } else if (user.role === 2) {
      this.router.navigateByUrl('/collection-dashboard',{replaceUrl: true })
    }
  }

  // Access the current user
   getUser() {
    console.log(this.currentUser)
    return this.currentUser.asObservable();
  }

  // Remove all information of the previous user
  async logout() {
    await this.storage.remove(TOKEN_KEY);
    this.currentUser.next(false);
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}

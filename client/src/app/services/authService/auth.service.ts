import { AlertService } from './../alertService/alert.service';
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
    private alert:AlertService
 
  ) {
    this.loadUser();
  }
  url = environment.url;

  async loadUser() {
    await this.storage.get(TOKEN_KEY).then((res) => {
      if (res) {
        var user = this.helper.decodeToken(res);
        this.currentUser.next(user);
        this.navigateOnRole(user);
      } else {
        this.currentUser.next(false);
      }
    });
  }

  signin(credentials) {
    return this.http.post<any>(`${this.url}/signin`, credentials).pipe(
      tap(async (res) => {
        await this.storage.set(TOKEN_KEY, res.token);
        var user = await this.helper.decodeToken(res.token);
        this.currentUser.next(user);
        this.navigateOnRole(user);
      }),
      catchError((error) => {
        if (error.error) {
          return this.alert.errorMessageAlert(error.error.message);
        } else {
          console.log(error);
        }
      })
    );
  }

  forgotPasswordSendOtp(body) {
    return this.http.post<any>(`${this.url}/forgot-password`, body).toPromise().catch(
      error => {
        if (error.error) {
          return this.alert.errorMessageAlert(error.error.message);
        } else {
          console.log(error)
        }
      }
    )
  }

  resetPassword(body) {
    return this.http.post<any>(`${this.url}/reset-password`, body).toPromise().catch(
      error => {
        if (error.error) {
          return this.alert.errorMessageAlert(error.error.message);
        } else {
          console.log(error)
        }
      }
    )
  }

  navigateOnRole(user) {
    // this.router.navigateByUrl('/tabs', { replaceUrl: true });
    if (user.role === environment.roles.adminUser) {
      this.router.navigateByUrl('/tabs/admin-dashboard', { replaceUrl: true });
    } else if (user.role === environment.roles.showroomUser) {
      this.router.navigateByUrl('/tabs/showroom-dashboard', { replaceUrl: true });
    } else if (user.role === environment.roles.collectionAgent) {
      this.router.navigateByUrl('/tabs/collection-dashboard', { replaceUrl: true });
    }
  }

  // Access the current user
  getUser() {
    return this.currentUser.asObservable();
  }

  getUserForTabs() {
    return this.currentUser.value
  }

  // Remove all information of the previous user
  async logout() {
    await this.storage.remove(TOKEN_KEY);
    this.currentUser.next(false);
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}

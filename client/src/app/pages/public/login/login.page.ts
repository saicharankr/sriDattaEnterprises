import { StorageService } from './../../../services/StorageService/storage.service';
import { AuthService } from './../../../services/authService/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, map, filter } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private storage: StorageService,
    private auth: AuthService,
    private router: Router,
    private helper: JwtHelperService
  ) {}

  emailId: string;
  password: string;
  user: any;

  ngOnInit() {}

  async login() {
    var cred = {
      email: this.emailId,
      password: this.password,
    };
    this.auth.signin(cred).subscribe((user) => {
      if (user) {
        this.user = this.helper.decodeToken(user.token);
        this.auth.navigateOnRole(this.user);
      }
    });
  }
}

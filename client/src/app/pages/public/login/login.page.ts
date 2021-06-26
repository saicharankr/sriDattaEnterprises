import { AuthService } from './../../../services/authService/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
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
    this.auth.signin(cred).subscribe();
  }

  forgotPassword() {
    this.router.navigateByUrl('/forgot-password',{ replaceUrl: true })
  }
}

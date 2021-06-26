import { AlertService } from './../../../services/alertService/alert.service';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private alert: AlertService
  ) {}
  emailId: string;

  ngOnInit() {}

  async forgotPasswordSendOtp() {
    console.log(this.emailId);
    var body = {
      email: this.emailId,
    };
    console.log(body);
    await this.auth.forgotPasswordSendOtp(body).then((res) => {
      if (res.success) {
        this.alert.ShowSuccess(res.message);
        this.router.navigateByUrl('/email-otp', { replaceUrl: true });
      }
    });
  }
}

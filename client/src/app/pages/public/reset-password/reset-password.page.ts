import { AuthService } from 'src/app/services/authService/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  otp: string;
  newPassword: string;
  confirmNewPassword: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute,private auth:AuthService) {
    this.activateRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.otp=this.router.getCurrentNavigation().extras.state.otp
      }
    })
   }

  ngOnInit() {
  }
  resetPassword() {
    var body = {
      token: this.otp,
      newPassword: this.newPassword,
      confirmPassword:this.confirmNewPassword
    }
    this.auth.resetPassword(body)
  }

}

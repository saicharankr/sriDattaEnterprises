import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.page.html',
  styleUrls: ['./email-otp.page.scss'],
})
export class EmailOtpPage implements OnInit {

constructor(private router:Router) { }

  otp: string;

  ngOnInit() {
  }

  submitOtp() {
    let navigationExtras: NavigationExtras = {
      state: {
        otp:this.otp
      }
    }
    this.router.navigate(['/reset-password'],navigationExtras)
  }

}

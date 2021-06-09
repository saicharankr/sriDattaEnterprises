import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailOtpPageRoutingModule } from './email-otp-routing.module';

import { EmailOtpPage } from './email-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailOtpPageRoutingModule
  ],
  declarations: [EmailOtpPage]
})
export class EmailOtpPageModule {}

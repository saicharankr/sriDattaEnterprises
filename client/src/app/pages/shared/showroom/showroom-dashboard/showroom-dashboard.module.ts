import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowroomDashboardPageRoutingModule } from './showroom-dashboard-routing.module';

import { ShowroomDashboardPage } from './showroom-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowroomDashboardPageRoutingModule
  ],
  declarations: [ShowroomDashboardPage]
})
export class ShowroomDashboardPageModule {}

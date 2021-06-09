import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionDashboardPageRoutingModule } from './collection-dashboard-routing.module';

import { CollectionDashboardPage } from './collection-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollectionDashboardPageRoutingModule
  ],
  declarations: [CollectionDashboardPage]
})
export class CollectionDashboardPageModule {}

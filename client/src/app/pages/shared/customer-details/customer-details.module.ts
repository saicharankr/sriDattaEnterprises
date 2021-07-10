import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { CustomerDetailsPageRoutingModule } from './customer-details-routing.module';

import { CustomerDetailsPage } from './customer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    MatExpansionModule,
    ComponentsModule,
    CustomerDetailsPageRoutingModule
  ],
  declarations: [CustomerDetailsPage]
})
export class CustomerDetailsPageModule {}

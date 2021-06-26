import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddShowroomPageRoutingModule } from './add-showroom-routing.module';

import { AddShowroomPage } from './add-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShowroomPageRoutingModule
  ],
  declarations: [AddShowroomPage]
})
export class AddShowroomPageModule {}

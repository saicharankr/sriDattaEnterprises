import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { AddShowroomPageRoutingModule } from './add-showroom-routing.module';

import { AddShowroomPage } from './add-showroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AddShowroomPageRoutingModule
  ],
  declarations: [AddShowroomPage]
})
export class AddShowroomPageModule {}

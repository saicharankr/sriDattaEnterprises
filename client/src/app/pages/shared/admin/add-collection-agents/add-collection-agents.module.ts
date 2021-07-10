import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddCollectionAgentsPageRoutingModule } from './add-collection-agents-routing.module';
import { AddCollectionAgentsPage } from './add-collection-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    MatFormFieldModule,
    AddCollectionAgentsPageRoutingModule
  ],
  declarations: [AddCollectionAgentsPage]
})
export class AddCollectionAgentsPageModule {}

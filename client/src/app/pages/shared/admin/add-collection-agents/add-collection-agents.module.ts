import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCollectionAgentsPageRoutingModule } from './add-collection-agents-routing.module';

import { AddCollectionAgentsPage } from './add-collection-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCollectionAgentsPageRoutingModule
  ],
  declarations: [AddCollectionAgentsPage]
})
export class AddCollectionAgentsPageModule {}

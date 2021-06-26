import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCollectionAgentsPageRoutingModule } from './list-collection-agents-routing.module';

import { ListCollectionAgentsPage } from './list-collection-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCollectionAgentsPageRoutingModule
  ],
  declarations: [ListCollectionAgentsPage]
})
export class ListCollectionAgentsPageModule {}

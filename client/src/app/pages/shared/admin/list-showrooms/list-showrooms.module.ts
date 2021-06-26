import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListShowroomsPageRoutingModule } from './list-showrooms-routing.module';

import { ListShowroomsPage } from './list-showrooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListShowroomsPageRoutingModule
  ],
  declarations: [ListShowroomsPage]
})
export class ListShowroomsPageModule {}

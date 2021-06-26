import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicesListPageRoutingModule } from './invoices-list-routing.module';

import { InvoicesListPage } from './invoices-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesListPageRoutingModule
  ],
  declarations: [InvoicesListPage]
})
export class InvoicesListPageModule {}

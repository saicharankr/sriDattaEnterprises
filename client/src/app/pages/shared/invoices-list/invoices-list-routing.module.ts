import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesListPage } from './invoices-list.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesListPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionDashboardPage } from './collection-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionDashboardPageRoutingModule {}

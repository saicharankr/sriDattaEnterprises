import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowroomDashboardPage } from './showroom-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ShowroomDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowroomDashboardPageRoutingModule {}

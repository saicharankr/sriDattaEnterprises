import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListShowroomsPage } from './list-showrooms.page';

const routes: Routes = [
  {
    path: '',
    component: ListShowroomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListShowroomsPageRoutingModule {}

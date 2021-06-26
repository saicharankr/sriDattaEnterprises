import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCollectionAgentsPage } from './list-collection-agents.page';

const routes: Routes = [
  {
    path: '',
    component: ListCollectionAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCollectionAgentsPageRoutingModule {}

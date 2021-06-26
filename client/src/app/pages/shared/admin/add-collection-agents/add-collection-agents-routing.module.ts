import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCollectionAgentsPage } from './add-collection-agents.page';

const routes: Routes = [
  {
    path: '',
    component: AddCollectionAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCollectionAgentsPageRoutingModule {}

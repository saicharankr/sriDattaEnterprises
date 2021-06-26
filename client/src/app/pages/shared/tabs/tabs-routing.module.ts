import { AuthGuard } from './../../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'admin-dashboard',
        loadChildren: () => import('./../admin/admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardPageModule),
        canActivate: [AuthGuard],
        data: {
          role: environment.roles.adminUser.toString(),
        },
      },
      {
        path: 'showroom-dashboard',
        loadChildren: () => import('./../showroom/showroom-dashboard/showroom-dashboard.module').then(m => m.ShowroomDashboardPageModule),
        canActivate: [AuthGuard],
        data: {
          role: environment.roles.showroomUser.toString()
        }
      },
      {
        path: 'collection-dashboard',
        loadChildren: () => import('./../collectionAgent/collection-dashboard/collection-dashboard.module').then(m => m.CollectionDashboardPageModule),
        canActivate: [AuthGuard],
        data: {
          role: environment.roles.collectionAgent.toString()
        }
      },
      {
        path: 'settings',
        loadChildren: () => import('./../settings/settings.module').then( m => m.SettingsPageModule),
        canActivate: [AuthGuard],
      },
      // {
      //   path: 'tasks',
      //   loadChildren: () => import('./../collectionAgent/tasks/tasks.module').then( m => m.TasksPageModule),
      //   canActivate: [AuthGuard],
      //   data: {
      //     role: environment.roles.collectionAgent.toString()
      //   }
      // },
      {
        path: 'invoices-list',
        loadChildren: () => import('./../invoices-list/invoices-list.module').then( m => m.InvoicesListPageModule),
        canActivate: [AuthGuard],
      },
      // {
      //   path: 'invoice-details',
      //   loadChildren: () => import('./../invoice-details/invoice-details.module').then( m => m.InvoiceDetailsPageModule),
      //   canActivate: [AuthGuard],
      // },
      // {
      //   path: 'collections',
      //   loadChildren: () => import('./../collections/collections.module').then( m => m.CollectionsPageModule)
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

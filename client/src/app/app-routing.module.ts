import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/public/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/public/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/public/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: 'email-otp',
    loadChildren: () =>
      import('./pages/public/email-otp/email-otp.module').then(
        (m) => m.EmailOtpPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/shared/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./pages/shared/collectionAgent/tasks/tasks.module').then(
        (m) => m.TasksPageModule
      ),
    canActivate: [AuthGuard],
    data: {
      role: environment.roles.collectionAgent.toString(),
    },
  },
  {
    path: 'invoice-details',
    loadChildren: () =>
      import('./pages/shared/invoice-details/invoice-details.module').then(
        (m) => m.InvoiceDetailsPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'customer-details',
    loadChildren: () =>
      import('./pages/shared/customer-details/customer-details.module').then(
        (m) => m.CustomerDetailsPageModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/shared/contact-us/contact-us.module').then(
        (m) => m.ContactUsPageModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/shared/about-us/about-us.module').then(
        (m) => m.AboutUsPageModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./pages/shared/support/support.module').then(
        (m) => m.SupportPageModule
      ),
  },
  {
    path: 'add-customer',
    loadChildren: () =>
      import('./pages/shared/showroom/add-customer/add-customer.module').then(
        (m) => m.AddCustomerPageModule
      ),
  },
  {
    path: 'add-showroom',
    loadChildren: () =>
      import('./pages/shared/admin/add-showroom/add-showroom.module').then(
        (m) => m.AddShowroomPageModule
      ),
  },
  {
    path: 'list-showrooms',
    loadChildren: () =>
      import('./pages/shared/admin/list-showrooms/list-showrooms.module').then(
        (m) => m.ListShowroomsPageModule
      ),
  },
  {
    path: 'list-collection-agents',
    loadChildren: () =>
      import(
        './pages/shared/admin/list-collection-agents/list-collection-agents.module'
      ).then((m) => m.ListCollectionAgentsPageModule),
  },
  {
    path: 'add-collection-agents',
    loadChildren: () =>
      import(
        './pages/shared/admin/add-collection-agents/add-collection-agents.module'
      ).then((m) => m.AddCollectionAgentsPageModule),
  },
  {
    path: 'assign-tasks',
    loadChildren: () =>
      import('./pages/shared/admin/assign-tasks/assign-tasks.module').then(
        (m) => m.AssignTasksPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/shared/tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'collections',
    loadChildren: () => import('./pages/shared/collections/collections.module').then( m => m.CollectionsPageModule)
  },
  // {
  //   path: 'admin-dashboard',
  //   loadChildren: () => import('./pages/shared/admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule),
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: environment.roles.adminUser.toString()
  //   }
  // },
  // {
  //   path: 'showroom-dashboard',
  //   loadChildren: () => import('./pages/shared/showroom/showroom-dashboard/showroom-dashboard.module').then(m => m.ShowroomDashboardPageModule),
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: environment.roles.showroomUser.toString()
  //   }
  // },
  // {
  //   path: 'collection-dashboard',
  //   loadChildren: () => import('./pages/shared/collectionAgent/collection-dashboard/collection-dashboard.module').then(m => m.CollectionDashboardPageModule),
  //   canActivate: [AuthGuard],
  //   data: {
  //     role: environment.roles.collectionAgent.toString()
  //   }
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

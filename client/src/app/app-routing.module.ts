import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/public/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/public/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'email-otp',
    loadChildren: () => import('./pages/public/email-otp/email-otp.module').then( m => m.EmailOtpPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/shared/admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule),
    canActivate: [AuthGuard],
    data: {
      role: "0"
    }
  },
  {
    path: 'showroom-dashboard',
    loadChildren: () => import('./pages/shared/showroom/showroom-dashboard/showroom-dashboard.module').then(m => m.ShowroomDashboardPageModule),
    canActivate: [AuthGuard],
    data: {
      role: "1"
    }
  },
  {
    path: 'collection-dashboard',
    loadChildren: () => import('./pages/shared/collectionAgent/collection-dashboard/collection-dashboard.module').then(m => m.CollectionDashboardPageModule),
    canActivate: [AuthGuard],
    data: {
      role: "2"
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

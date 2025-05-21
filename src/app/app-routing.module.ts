// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'processes/active',
        loadComponent: () => import('./features/processes/active/active.component').then((c) => c.ActiveProcessesComponent)
      },
      {
        path: 'processes/abandoned',
        loadComponent: () => import('./features/processes/abandoned/abandoned.component').then((c) => c.AbandonedProcessesComponent)
      },
      {
        path: 'analysis/impact',
        loadComponent: () => import('./features/analysis/impact/impact.component').then((c) => c.ImpactAnalysisComponent)
      },
      {
        path: 'analysis/performance',
        loadComponent: () => import('./features/analysis/performance/performance.component').then((c) => c.PerformanceAnalysisComponent)
      },
      {
        path: 'admin/users',
        loadComponent: () => import('./features/admin/users/users.component').then((c) => c.UsersComponent)
      },
      {
        path: 'admin/settings',
        loadComponent: () => import('./features/admin/settings/settings.component').then((c) => c.SettingsComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/auth-login/auth-login.component').then((c) => c.AuthLoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./demo/pages/authentication/auth-register/auth-register.component').then((c) => c.AuthRegisterComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
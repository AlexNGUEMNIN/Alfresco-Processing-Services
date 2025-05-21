import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'processes',
        children: [
          {
            path: 'active',
            loadComponent: () => import('./features/processes/active/active.component').then((c) => c.ActiveProcessesComponent)
          },
          {
            path: 'abandoned',
            loadComponent: () => import('./features/processes/abandoned/abandoned.component').then((c) => c.AbandonedProcessesComponent)
          }
        ]
      },
      {
        path: 'analysis',
        children: [
          {
            path: 'impact',
            loadComponent: () => import('./features/analysis/impact/impact.component').then((c) => c.ImpactAnalysisComponent)
          },
          {
            path: 'performance',
            loadComponent: () => import('./features/analysis/performance/performance.component').then((c) => c.PerformanceAnalysisComponent)
          }
        ]
      },
      {
        path: 'database',
        loadComponent: () => import('./features/database/monitoring.component').then((c) => c.DatabaseMonitoringComponent)
      },
      {
        path: 'admin',
        children: [
          {
            path: 'users',
            loadComponent: () => import('./features/admin/users/users.component').then((c) => c.UsersComponent)
          },
          {
            path: 'settings',
            loadComponent: () => import('./features/admin/settings/settings.component').then((c) => c.SettingsComponent)
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard-module').then((m) => m.DashboardModule),
      },
      {
        path: 'medicines',
        loadChildren: () =>
          import('./features/medicines/medicines-module').then((m) => m.MedicinesModule),
      },
      {
        path: 'prescriptions',
        loadChildren: () =>
          import('./features/prescriptions/prescriptions-module').then(
            (m) => m.PrescriptionsModule,
          ),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./features/customers/customers-module').then((m) => m.CustomersModule),
      },
      {
        path: 'suppliers',
        loadChildren: () =>
          import('./features/suppliers/suppliers-module').then((m) => m.SuppliersModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./features/reports/reports-module').then((m) => m.ReportsModule),
      },
    ],
  },
];

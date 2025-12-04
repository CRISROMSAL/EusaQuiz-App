import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profesor',
    loadComponent: () => import('./pages/profesor/dashboard-profesor/dashboard-profesor').then(m => m.DashboardProfesor),
  },
  {
    path: 'alumno',
    loadComponent: () => import('./pages/alumno/dashboard-alumno/dashboard-alumno').then(m => m.DashboardAlumno),
  },
  {
    path: '',
    redirectTo: 'profesor',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'profesor',
  },
];
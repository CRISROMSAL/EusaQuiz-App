import { Routes } from '@angular/router';

export const routes: Routes = [
  // LIVE (Partida en vivo) - ANTES que nada
  {
    path: 'live/profesor/lobby',
    loadComponent: () =>
      import('./pages/live/profesor/lobby-profesor/lobby-profesor')
        .then(m => m.LobbyProfesor),
  },
  {
    path: 'live/alumno/lobby',
    loadComponent: () =>
      import('./pages/live/alumno/lobby-alumno/lobby-alumno')
        .then(m => m.LobbyAlumno),
  },



  // Profesor
  {
    path: 'profesor',
    loadComponent: () =>
      import('./pages/profesor/dashboard-profesor/dashboard-profesor')
        .then(m => m.DashboardProfesor),
  },
  {
    path: 'profesor/importar-preguntas',
    loadComponent: () =>
      import('./pages/profesor/importar-preguntas/importar-preguntas')
        .then(m => m.ImportarPreguntas),
  },
  {
    path: 'profesor/crear-partida',
    loadComponent: () =>
      import('./pages/profesor/crear-partida/crear-partida')
        .then(m => m.CrearPartida),
  },

  // Alumno
  {
    path: 'alumno',
    loadComponent: () =>
      import('./pages/alumno/dashboard-alumno/dashboard-alumno')
        .then(m => m.DashboardAlumno),
  },

  // Redirecciones
  { path: '', redirectTo: 'profesor', pathMatch: 'full' },
  { path: '**', redirectTo: 'profesor' },
];

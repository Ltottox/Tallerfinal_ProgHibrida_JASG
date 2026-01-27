import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'crear-aviso',
    loadComponent: () => import('./crear-aviso/crear-aviso.page').then( m => m.CrearAvisoPage)
  },
  {
    path: 'crear-aviso',
    loadComponent: () => import('./crear-aviso/crear-aviso.page').then( m => m.CrearAvisoPage)
  },
];

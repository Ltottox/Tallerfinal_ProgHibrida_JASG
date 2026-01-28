import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { CrearAvisoPage } from './crear-aviso/crear-aviso.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'crear-aviso', component: CrearAvisoPage }
];
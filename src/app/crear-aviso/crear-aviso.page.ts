import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // ← AGREGAR ESTO
import { CommonModule } from '@angular/common'; // ← AGREGAR ESTO

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.page.html',
  styleUrls: ['./crear-aviso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]  // ← AGREGAR ESTA LÍNEA
})
export class CrearAvisoPage {
  constructor() {}
}
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './confirm-modal.component.html'
})
// Clase ConfirmModalComponent para el modal de confirmación
export class ConfirmModalComponent {
  constructor(private modalCtrl: ModalController) {}

  confirmar() {// Método para confirmar la acción
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {// Método para cancelar la acción
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent {
  constructor(private modalCtrl: ModalController) {}

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
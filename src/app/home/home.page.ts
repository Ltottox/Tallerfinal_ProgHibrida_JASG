import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AvisoCardComponent } from '../componentes/aviso-card/aviso-card.component';
import { ConfirmModalComponent } from '../componentes/confirm-modal/confirm-modal.component';
import { AvisoService } from '../servicios/aviso.service';
import { Aviso } from '../modelos/aviso.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AvisoCardComponent, RouterModule]
})
export class HomePage implements OnInit {
  avisos: Aviso[] = [];

  constructor(
    private avisoService: AvisoService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    await this.cargarAvisos();
  }

  // Se ejecuta cada vez que entras a la página
  async ionViewWillEnter() {
    await this.cargarAvisos();
  }

  async cargarAvisos() {
    this.avisos = await this.avisoService.obtenerAvisos();
  }

  async confirmarEliminacion(id: number) {
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent
    });
    
    await modal.present();
    const { data } = await modal.onWillDismiss();
    
    if (data?.confirmado) {
      await this.avisoService.eliminarAviso(id);
      await this.cargarAvisos(); // Recargar lista
    }
  }
}
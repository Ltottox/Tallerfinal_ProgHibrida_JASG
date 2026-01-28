import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { AvisoCardComponent } from '../componentes/aviso-card/aviso-card.component';
import { ConfirmModalComponent } from '../componentes/confirm-modal/confirm-modal.component';
import { AvisoService } from '../servicios/aviso.service';
import { Aviso } from '../modelos/aviso.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, AvisoCardComponent, ConfirmModalComponent]
})
// Clase HomePage para la pagina de inicio que muestra la lista de avisos
export class HomePage implements OnInit {
  avisos: Aviso[] = [];
// Constructor con inyecciones de dependencias para AvisoService y ModalController
  constructor(
    private avisoService: AvisoService,
    private modalCtrl: ModalController
  ) {
    addIcons({ add });// icono de agregar para usar en el boton flotante
  }

  async ngOnInit() {
    await this.cargarAvisos();// Cargar avisos al inicializar el componente
  }
// Metodo que se ejecuta cada vez que la vista esta a punto de entrar
  async ionViewWillEnter() {
    await this.cargarAvisos();
  }
  // Metodo para cargar los avisos desde el servicio
  async cargarAvisos() {
    this.avisos = await this.avisoService.obtenerAvisos();
  }
  // Metodo para confirmar y eliminar un aviso
  async confirmarEliminacion(id: number) {
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent
    });
    //modal.present() muestra el modal y onWillDismiss() espera a que se cierre
    await modal.present();
    const { data } = await modal.onWillDismiss();// Espera a que el modal se cierre y obtiene los datos devueltos
    // Si el usuario confirmó, elimina el aviso y recarga la lista
    if (data?.confirmado) {
      await this.avisoService.eliminarAviso(id);
      await this.cargarAvisos();
    }
  }
}
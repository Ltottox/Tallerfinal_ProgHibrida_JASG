import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule, DatePipe } from '@angular/common';
import { Aviso } from '../../modelos/aviso.model';

@Component({
  selector: 'app-aviso-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './aviso-card.component.html',
  styleUrls: ['./aviso-card.component.scss']
})
export class AvisoCardComponent {
  @Input() aviso!: Aviso;
  @Output() eliminar = new EventEmitter<number>();

  solicitarEliminacion() {
    this.eliminar.emit(this.aviso.id);
  }
}
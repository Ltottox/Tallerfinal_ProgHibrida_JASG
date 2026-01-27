import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Aviso } from '../modelos/aviso.model';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  private readonly STORAGE_KEY = 'avisos';

  async obtenerAvisos(): Promise<Aviso[]> {
    const { value } = await Preferences.get({ key: this.STORAGE_KEY });
    return value ? JSON.parse(value) : [];
  }

  async guardarAviso(aviso: Aviso): Promise<void> {
    const avisos = await this.obtenerAvisos();
    aviso.id = new Date().getTime();
    aviso.fecha = new Date();
    avisos.push(aviso);
    
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(avisos)
    });
  }

  async eliminarAviso(id: number): Promise<void> {
    let avisos = await this.obtenerAvisos();
    avisos = avisos.filter(a => a.id !== id);
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(avisos)
    });
  }
}
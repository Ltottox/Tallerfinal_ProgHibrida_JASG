export interface Aviso {
  id?: number;
  titulo: string;
  descripcion: string;
  fecha: Date;
  foto?: string;
  tipo: 'mascota' | 'documento' | 'sospecha' | 'otro';
}
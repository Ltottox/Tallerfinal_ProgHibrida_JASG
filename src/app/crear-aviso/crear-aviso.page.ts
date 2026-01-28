import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';  
import { AvisoService } from '../servicios/aviso.service';
import { PhotoService } from '../servicios/photo.service';
import { Aviso } from '../modelos/aviso.model';

// CrearAvisoPage Component
@Component({
  selector: 'app-crear-aviso',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './crear-aviso.page.html',
  styleUrls: ['./crear-aviso.page.scss']
})
// Clase CrearAvisoPage
export class CrearAvisoPage {
  avisoForm: FormGroup;
  fotoTomada?: string;
  tipos = ['mascota', 'documento', 'sospecha', 'otro'];
// Constructor de la clase con inyecciones de dependencias para FormBuilder, AvisoService, PhotoService y Router
  constructor(
    private fb: FormBuilder,
    private avisoService: AvisoService,
    private photoService: PhotoService,
    private router: Router  // uso de Router para navegación
  ) {// validaciones del formulario
    this.avisoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      tipo: ['', Validators.required]
    });
  }
// Getter para acceder fácilmente a los controles del formulario
  get f() { return this.avisoForm.controls; }
// Método para capturar foto usando el PhotoService. 
  async capturarFoto() {
    this.fotoTomada = await this.photoService.tomarFoto();
  }
// Método para guardar el aviso. Valida el formulario, crea un objeto Aviso y lo guarda usando el AvisoService.
//  Luego navega a la página de inicio.
  async guardar() {
    if (this.avisoForm.invalid) {
      this.avisoForm.markAllAsTouched();
      return;
    }
    // Crear objeto Aviso con los datos del formulario y la foto tomada
    const aviso: Aviso = {
      ...this.avisoForm.value,
      foto: this.fotoTomada,
      fecha: new Date()
    };
    // Guardar el aviso usando el servicio
    await this.avisoService.guardarAviso(aviso);
    this.router.navigate(['/home']); // ← Navega a Home después de guardar
  }
}
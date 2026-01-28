import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'fechaFormat',
  standalone: true
})
export class FechaFormatPipe implements PipeTransform {
  transform(value: Date | string): string {
    const datePipe = new DatePipe('es-ES');
    return datePipe.transform(value, 'dd/MM/yyyy HH:mm') || '';
  }
}
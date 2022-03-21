import { Component } from '@angular/core';
import { compra } from 'src/app/models/compra.model';
import { Licor } from 'src/app/models/licor.model';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css'],
})
export class ComprarComponent {
  costo_total = 0;
  productos: Licor[] = [];

  constructor(public service: ServicioService) {}

  agregar(licor: Licor) {
    this.productos.push(licor);
    this.costo_total += licor.costo;
  }

  comprar() {
    if (this.costo_total == 0) {
      alert('No ha agregado productos')
    } else {
      for (let user of this.service.users) {
        if ((user.nombre = this.service.useraccount)) {
          user.compras.push(new compra(this.costo_total, this.productos));
          this.costo_total = 0;
          this.productos = [];
          this.service.compras_realizadas++;
          this.service.compras_realizadas_user++;
          alert('Compra realizada');
        }
      }
    }
  }
}

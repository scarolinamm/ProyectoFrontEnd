import { Component, OnInit} from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit{

  constructor(public service : ServicioService) { }
  
  ngOnInit(): void {
    for(let user of this.service.users)
    {
      if(user.nombre == this.service.useraccount)
      {
        this.service.compras_realizadas_user = user.compras.length
      }
    }
  }

}

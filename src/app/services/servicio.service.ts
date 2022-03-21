import { Injectable } from '@angular/core';
import { compra } from '../models/compra.model';
import { Licor } from '../models/licor.model';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  logged: boolean = false
  admin:boolean = true
  ir_login: boolean = false
  ir_signup: boolean = false
  ir_compra: boolean= false
  ir_historial: boolean = false
  ir_crud: boolean = false
  ir_reportes: boolean = false
  useraccount: string = ""
  compras_realizadas = 0
  compras_realizadas_user: number = 0
  users: user[] = []
  inventario: Licor[] = []
  constructor() {
    
  }
}

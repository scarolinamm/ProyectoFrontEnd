import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public service: ServicioService) {

  }

  login(nombre: string, password: string) {
    var encontro: boolean = false
    console.log(nombre)
    console.log(password)
    if (nombre == '' || password == '') {
    } else if (this.service.users.length == 0) {
      alert('No ha creado una cuenta')
      this.service.ir_login = false
      this.service.ir_signup = true
    } else {
      for (let user of this.service.users) {
        if (nombre == user.nombre && password == user.password) {
          encontro = true
          break
        }
      }
      console.log(encontro)
      if (encontro) {
        this.service.useraccount = nombre
        this.service.logged = true
        alert('¡Bienvenido/a!')
        this.service.ir_login = false
      } else {
        alert('Nombre de ususario o constraseña incorrecta')
        this.service.ir_login = false
      }
    }
  }
}

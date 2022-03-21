import { Component } from '@angular/core';
import { user } from '../models/user.model';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(public service: ServicioService) {}

  registrarse(nombre: string, password: string, cel: string, email: string) {
    var encontro: boolean = false;
    if (nombre == '' || password == '' || cel == '' || email =='') {
    } else if (this.service.users.length == 0) {
      this.service.users.push(new user(email, cel, nombre, password));
      alert('Cuenta creada exitosamente');
      console.log(this.service.users.length);
      this.service.ir_signup = false;
      this.service.ir_login = true;
    } else {
      for (let user of this.service.users) {
        if (user.email == email) {
          alert('El usuario ya está creado');
          this.service.ir_signup = false;
          encontro = true;
        } else if (user.nombre == nombre) {
          alert('El nombre de usuario ya existe');
          this.service.ir_signup = false;
          encontro = true;
        }
      }
      if (!encontro) {
        this.service.users.push(new user(email, cel, nombre, password));
        alert('Cuenta creada exitosamente');
        console.log(this.service.users.length);
        this.service.ir_signup = false;
        this.service.ir_login = true;
      }
    }
  }
}

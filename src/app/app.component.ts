import { Component, OnInit} from '@angular/core';
import { LoginComponent} from './login/login.component';
import { Licor } from './models/licor.model';
import { user } from './models/user.model';
import { ServicioService } from './services/servicio.service';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public service : ServicioService){
  }

  ngOnInit(): void {
    this.service.inventario.push(new Licor(0,"Dom Perignon","Francia","Champagne",3,12.5,1660400))
    this.service.inventario.push(new Licor(1,"Casillero del diablo", "Chile","Vino",6,13.5,70000))
    this.service.inventario.push(new Licor(2,"Barolo", "Italia","Vino",3,14,884000))
    this.service.inventario.push(new Licor(3,"Armand de Brignac", "Francia","Champagne",0,12,2490000))
    this.service.inventario.push(new Licor(4,"Bombay", "Inglaterra","Ginebra",4,47,274890))
    this.service.inventario.push(new Licor(5,"Bulldog", "Inglaterra","Ginebra",6,40,209980))
    this.service.inventario.push(new Licor(6,"Petrus", "Francia","Vino",4,17,1200000))
    this.service.inventario.push(new Licor(7,"Chivas Regal", "Escocia","Whisky",8,40,122000))
    this.service.inventario.push(new Licor(8,"Don Julio", "Mexico","Tequila",9,40,220000))
    this.service.inventario.push(new Licor(9,"Glenfiddich", "Escocia","Whisky",6,40,121990))
    this.service.inventario.push(new Licor(10,"Hendriks", "Escoces","Ginebra",5,44,189800))
    this.service.inventario.push(new Licor(11,"Patron", "Mexico","Tequila",9,40,219990))
    this.service.inventario.push(new Licor(12,"Macallan", "Escoces","Whisky",6,43,365700))
    this.service.inventario.push(new Licor(13,"Siete leguas", "Mexico","Tequila",6,38.5,219990))
    this.service.inventario.push(new Licor(14,"Moet", "Francia","Champagne",3,12,2035399))
    this.service.users.push(new user("user@gmail.com","54321","usuario1","12345"))
    this.service.users.push(new user("user2@gmail.com","54321","usuario2","12345"))
  }
}

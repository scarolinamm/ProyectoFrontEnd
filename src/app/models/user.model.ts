import { compra } from './compra.model';

export class user {
  email: string;
  celular: string;
  nombre: string;
  password: string;
  compras: compra[];

  constructor(
    email: string,
    celular: string,
    nombre: string,
    password: string
  ) {
    this.email = email;
    this.celular = celular;
    this.nombre = nombre;
    this.password = password;
    this.compras = [];
  }
}


export class Licor{

    id: number;
    nombre: string;
    pais: string;
    tipo : string;
    cantidad: number;
    grados: number;
    costo: number;

    constructor(id: number,nombre: string, pais:string, tipo: string, cantidad: number, grados: number, costo: number){
        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.grados = grados;
        this.costo = costo;
    }
}
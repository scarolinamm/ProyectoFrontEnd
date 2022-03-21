import { Licor } from "./licor.model";

export class compra 
{
    costo_total: number
    productos: Licor[]

    constructor(costo_total: number, productos: Licor[])
    {
        this.costo_total = costo_total
        this.productos= productos
    }
}
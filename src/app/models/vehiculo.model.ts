export class VehiculoModel {
    id: string; 
    Propietario: string;
    Marca: string;
    Nombre: string;
    Placa: string;
    Tipo: string;
    Color: string;
    Reparacion: string;
    Usuario: string;
    Reparado: boolean;

    constructor() {
        this.Reparado = true;
    }
}
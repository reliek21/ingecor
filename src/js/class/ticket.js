import { Servicios } from './servicios.js';

export class Ticket extends Servicios {
    codigo;
    tipoTicket;
    descripcion;
    constructor(codigo, tipoTicket, descripcion) {
        this.codigo = codigo;
        this.tipoTicket = tipoTicket;
        this.descripcion = descripcion;
    }

    get getCodigo() {
        return codigo;
    }

    set setCodigo(newCodigo) {
        this.codigo = newCodigo;
    }

    get getTipoTicket() {
        return tipoTicket;
    }

    set setTipoTicket(newTipoTicket) {
        this.tipoTicket = newTipoTicket;
    }

    get getDescripcion() {
        return descripcion;
    }

    set setDescripcion(newDescripcion) {
        this.descripcion = newDescripcion;
    }
}
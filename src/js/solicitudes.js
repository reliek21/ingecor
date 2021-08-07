import { Ticket } from './ticket.js';

class Solicitudes extends Ticket {
    id;
    estado;
    descripcion;
    constructor(id, estado, descripcion) {
        this.id = id;
        this.estado = estado;
        this.descripcion = descripcion;
    }

    get getId() {
        return this.id;
    }

    set setId(newId) {
        this.id = newId;
    }

    get getEstado() {
        return this.estado;
    }

    set setEstado(newEstado) {
        this.estado = newEstado;
    }

    get getDescripcion() {
        return this.descripcion;
    }

    set setDescripcion(newDescripcion) {
        this.descripcion = newDescripcion;
    }
}
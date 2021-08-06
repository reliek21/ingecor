export class Seguimiento extends Servicios {
    numId;
    nombre;
    constructor(numId, nombre) {
        this.numId = numId;
        this.nombre = nombre;
    }

    get getNumId() {
        return this.numId;
    }

    set setNumId(newNumId) {
        this.numId = newNumId;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(newNombre) {
        this.nombre = newNombre;
    }
}
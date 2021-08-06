export class Servicios {
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
}
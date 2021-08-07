import { Personas } from "./personas.js";

class Empleado extends Personas {
    cargo;
    constructor(cargo) {
        this.cargo = cargo;
    }

    get getCargo() {
        return this.cargo;
    }

    set setCargo(newCargo) {
        this.cargo = newCargo;
    }
}
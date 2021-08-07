import { Categoria } from './categoria.js';

class SubCategoria extends Categoria {
    id;
    nombre;
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    get getId() {
        return this.id;
    }

    set setId(newId) {
        this.id = newId;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(newNombre) {
        this.nombre = newNombre;
    }

}
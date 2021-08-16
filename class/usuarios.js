import { Personas } from './personas.js';

class Usuarios extends Personas {
    usuario;
    clave;
    empresa;
    constructor(usuario, clave, empresa) {
        this.usuario = usuario;
        this.clave = clave;
        this.empresa = empresa;
    }

    get getUsario() {
        return usuario;
    }

    set setUsario(newUsuario) {
        this.usuario = newUsuario;
    }

    get getClave() {
        return clave;
    }

    set setClave(newClave) {
        this.clave = newClave;
    }

    get getEmpresa() {
        return empresa;
    }

    set setEmpresa(newEmpresa) {
        this.empresa = newEmpresa;
    }
}
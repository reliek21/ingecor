export class Usuarios extends Personas {
    user;
    clave;
    empresa;
    constructor(user, clave, empresa) {

    }

    get getUser() {
        return user;
    }

    set setUser(newUser) {
        this.user = newUser;
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
import { Solicitudes } from '../solicitudes.js';

class Registros extends Solicitudes {
    codigoReporte;
    constructor(codigoReporte) {
        this.codigoReporte = codigoReporte;
    }

    get getCodigoReporte() {
        return this.codigoReporte;
    }

    set setCodigoReporte(newCodigoReporte) {
        this.codigoReporte = newCodigoReporte;
    }
}
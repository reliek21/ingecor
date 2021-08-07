import { Servicios } from './servicios.js';

class Registros extends Servicios {
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
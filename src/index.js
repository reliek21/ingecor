import { Servicios } from "./js/servicios.js";

// Servicios
const id = [0,1,2,3];
const listaServicios = ['Administrativo', 'Educativo', 'Operacional', 'comercial'];

let servicios1 = new Servicios();
servicios1.setNumId = id;
servicios1.setNombre = listaServicios;
console.log(`Id de los servicios: ${servicios1.getNumId}`);
console.log(`Nuestros servicios: ${servicios1.getNombre}`);
console.log('Seleccionamos un servicio: 2');
console.log(`Codigo: ${servicios1.getNumId[2]}, Servicio: ${servicios1.getNombre[2]}`);

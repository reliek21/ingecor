export class Personas {
    tipoId;
    numId;
    nombre;
    apellido;
    correo;
    numeroTelefono;
    sexo;
    direccion;
    edad;
    constructor(
        tipoId,
        numId,
        nombre,
        apellido,
        correo,
        numeroTelefono,
        sexo,
        direccion,
        edad) {
            this.tipoId = tipoId;
            this.numId = numId;
            this.nombre = nombre;
            this.apellido = apellido;
            this.correo = correo;
            this.numeroTelefono = numeroTelefono;
            this.sexo = sexo;
            this.direccion = direccion;
            this.edad = edad;
        }

    get getTipoId() {
        return this.tipoId;
    }

    set setTipoId(newTipoId) {
        this.tipoId = newTipoId;
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

    get getApellido() {
        return this.apellido;
    } 

    set setApellido(newApellido) {
        this.apellido = newApellido;
    }

    get getCorreo() {
        return this.correo;
    }

    set setCorreo(newCorreo) {
        this.correo = newCorreo;
    }

    get getNumeroTelefono() {
        return this.numeroTelefono;
    }

    set setNumeroTelefono(newNumeroTelefono) {
        this.numeroTelefono = newNumeroTelefono;
    }

    get getSexo() {
        return this.sexo;
    }

    set setSexo(newSexo) {
        this.sexo = newSexo;
    }

    get getDireccion() {
        return this.direccion;
    }

    set setDireccion(newDireccion) {
        this.direccion = newDireccion;
    }

    get getEdad() {
        return this.edad;
    }

    set setEdad(newEdad) {
        this.edad = newEdad;
    }
}
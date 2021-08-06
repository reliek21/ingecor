public class Personas {
    private int tipoId;
    private int numId;
    private String nombre;
    private String apellido;
    private String correo;
    private int numeroTelefono;
    private int sexo;
    private String direccion;
    private int edad;

    // Getter
    public int getTipoId() {
        return tipoId;
    }

    public int getNumId() {
        return numId;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellid() {
        return apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public int getNumeroTelefono() {
        return numeroTelefono;
    }

    public int getSexo() {
        return sexo;
    }

    public String getDireccion() {
        return direccion;
    }

    public int getEdad() {
        return edad;
    }

    // Setter
    public void setTipoId(int newTipoId) {
        this.tipoId = newTipoId;
    }

    public void setNumId(int newNumId) {
        this.numId = newNumId;
    }

    public void setNombre(String newNombre) {
        this.nombre = newNombre;
    }

    public void setApellid(String newApellido) {
        this.apellido = newApellido;
    }

    public void setCorreo(String newCorreo) {
        this.correo = newCorreo;
    }

    public void setNumeroTelefono(int newNumeroTelefono) {
        this.numeroTelefono = newNumeroTelefono;
    }

    public void setSexo(int newSexo) {
        this.sexo = newSexo;
    }

    public void setDireccion(String newDireccion) {
        this.direccion = newDireccion;
    }

    public void setEdad(int newEdad) {
        this.edad = newEdad;
    }
}

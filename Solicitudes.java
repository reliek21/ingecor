public class Solicitudes extends Ticket{
    private int id;
    private int estado;
    private String descripcion;

    // Getter
    public int getId() {
        return id;
    }

    public int getEstado() {
        return estado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    // Setter
    public void setId(int newId) {
        this.id = newId;
    }

    public void setEstado(int newEstado) {
        this.estado = newEstado;
    }

    public void setDescripcion(String newDescripcion) {
        this.descripcion = newDescripcion;
    }

}

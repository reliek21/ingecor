public class Ticket extends Servicios{
    private int codigo;
    private int tipoTicket;
    private String descripcion;

    // Getter
    public int getCodigo() {
        return codigo;
    }

    public int getTipoTicket() {
        return tipoTicket;
    }

    public String getDescripcion() {
        return descripcion;
    }

    // Setter

    public void setCodigo(int newCodigo) {
        this.codigo = newCodigo;
    }

    public void setTipoTicket(int newtipoTicket) {
        this.tipoTicket = newtipoTicket;
    }

    public void setDescripcion(String newdescripcion) {
        this.descripcion = newdescripcion;
    }
}

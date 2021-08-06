public class Usuarios extends Personas {
    private String user;
    private int clave;
    private String empresa;

    // Getter
    public String getUser() {
        return user;
    }

    public int getClave() {
        return clave;
    }

    public String getEmpresa() {
        return empresa;
    }

    // Setter
    public void setUser(String newUser) {
        this.user = newUser;
    }

    public void setClave(int newClave) {
        this.clave = newClave;
    }

    public void setEmpresa(String newEmpresa) {
        this.empresa = newEmpresa;
    }
}

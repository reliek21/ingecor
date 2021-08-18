// TODO: Manejar las rutas desde aquí.

const indexCtrl = {}

indexCtrl.renderHome = (req, res) => {
    res.render('home', {
        title: 'Home'
    });
};

// TODO: Traer las demas rutas
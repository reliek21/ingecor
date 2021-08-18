const { Schema, model } = require('mongoose');
const bcryp = require('bcryptjs');

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

// Cifrando la contraseña
<<<<<<< HEAD
UsuarioSchema.method.encrypPassword = async password => {
=======
UserSchema.method.encrypPassword = async password => {
>>>>>>> dev-back
    const salt = await bcryp.genSalt(10);
    return await bcryp.hash(password, salt);
};

// Autenticación de la contraseña
<<<<<<< HEAD
UsuarioSchema.method.matchPassword = function (password) {
    return await bcryp.compare(password, this.password)
}

module.exports = model('Usuario', UsuarioSchema);
=======
UserSchema.method.matchPassword = function (password) {
    return await bcryp.compare(password, this.password)
}

module.exports = model('User', UserSchema);
>>>>>>> dev-back

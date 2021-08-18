const { Schema, model } = require('mongoose');
const bcryp = require('bcryptjs');

<<<<<<< HEAD
const UserSchema = new Schema({
    name: {
=======
const UsuarioSchema = new Schema({
    nombre: {
>>>>>>> main
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
UserSchema.method.encrypPassword = async password => {
=======
UsuarioSchema.method.encrypPassword = async password => {
>>>>>>> main
    const salt = await bcryp.genSalt(10);
    return await bcryp.hash(password, salt);
};

// Autenticación de la contraseña
<<<<<<< HEAD
UserSchema.method.matchPassword = function (password) {
    return await bcryp.compare(password, this.password)
}

module.exports = model('User', UserSchema);
=======
UsuarioSchema.method.matchPassword = function (password) {
    return await bcryp.compare(password, this.password)
}

module.exports = model('Usuario', UsuarioSchema);
>>>>>>> main

const { Schema, model } = require('mongoose');
const bcryp = require('bcryptjs');

const UserSchema = new Schema({
    name: {
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
UserSchema.method.encrypPassword = async password => {
    const salt = await bcryp.genSalt(10);
    return await bcryp.hash(password, salt);
};

// Autenticación de la contraseña
UserSchema.method.matchPassword = function (password) {
    return await bcryp.compare(password, this.password)
}

module.exports = model('User', UserSchema);
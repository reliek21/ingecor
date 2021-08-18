const { Schema, model } = require('mongoose');
const bcryp = require('bcryptjs');

const userSchema = new Schema({
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
    },

}, {
    timestamps: true
});

userChema.method.encrypPassword = password = async password => {
    const salt = await bcryp.genSalt(10);
    return await bcryp.hash(password, salt);
};

userChema.method.matchPassword = function (password) {
    return await bcryp.compare(password, this.password);
}


module.exports = model('User', userSchema);
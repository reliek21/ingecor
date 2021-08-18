const { Schema, model } = require('mongoose');

const TicketSchema = new Schema({
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: false,
        default: 'Asignado'
    },
    personal: {
        type: String,
        require: true,
    },
    area: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: false
    }
}, {
    timestamps: true
});

module.exports = model('Ticket', TicketSchema);
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Base de datos conectada')).catch(
    (error) => {
        console.log(error);
    }
);
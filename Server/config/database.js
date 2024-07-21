const mongoose = require('mongoose'); // to import the mongoose module
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
       .then(() => console.log('Connected to MongoDB'))
       .catch((err) => {
        console.error('Could not connect to MongoDB:', err)
        process.exit(1);
    })
};

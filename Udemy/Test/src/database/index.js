const mongoose = require("mongoose");
const config = require("../../config.json").mongoDB;

mongoose.connect(config.connectionString,{ useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log(`MongoDB: ${mongoose.STATES[mongoose.connection.readyState]}`), err => console.log('error', err));

mongoose.Promise = global.Promise;

module.exports = mongoose;

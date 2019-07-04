const userRoutes = require("./user-routes");
//const matchRoutes = require("./match-routes.js");
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(cors({origin: true}));
app.use('/user', userRoutes);



mongoose.connect(config.app.MONGODB_URI, {useNewUrlParser:true}, function (err) {
    if (err) {
        console.log('Connection Failed');
    } else {
        console.log('Connection Established');
        app.listen(config.app.PORT, () => {
            console.log(`Server listening on port: ${config.app.PORT}`);
        });
    }
});
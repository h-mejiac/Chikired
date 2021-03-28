'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://chikired-db:Lh4phrF0sbhfDoC8fWkf8KumLjENb9Q6J0b8dP5verRJ5NyLWE2jyk5M8E956o7gjzCjWQ49cnmKkEBfOb4MEg%3D%3D@chikired-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@chikired-db@")
    .then(() => {
        console.log('Connection to CosmosDB successful');
        app.listen(port, function() {
            console.log("Servidor en http://localhost:" + port);
        });
    })
    .catch((err) => console.error(err));
'use strict'

var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://chikired-db:Lh4phrF0sbhfDoC8fWkf8KumLjENb9Q6J0b8dP5verRJ5NyLWE2jyk5M8E956o7gjzCjWQ49cnmKkEBfOb4MEg==@chikired-db.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@chikired-db@",
    function(err, db) {
        if (err) {
            throw err;
        } else {
            console.log("COnectado a la base de datos con exito");
        }
        db.close();
    });
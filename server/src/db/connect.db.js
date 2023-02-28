"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = exports.connectToDb = void 0;
const mongodb_1 = require("mongodb");
let dbConnection;
// THIS IS HOW WE EXPORT THINGS IN NODE APPLICATION!
// Connect to database
// passing in an argument (an callback fucntion) that we want to run after we established the connection.
const connectToDb = (cb) => {
    // This is an asynchronose task - and returns a promise.
    //connection string on our computer, or when we publish on Mongo Atlas.
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5x1ex9p.mongodb.net/${process.env.DB_NAME}`;
    mongodb_1.MongoClient.connect(uri)
        .then(client => {
        dbConnection = client.db();
        console.log('Connected to db');
        return cb();
    })
        .catch(err => {
        console.log(err);
        // Passing the cb function and take care of error!
        return cb(err);
    });
};
exports.connectToDb = connectToDb;
// Retrive once we have a connection "communicate"
// Return a value which is the database connection.
const getDb = () => dbConnection;
exports.getDb = getDb;
// db connection. Only listen to request if no error occurs. Only after we sucessfully connected to the database!

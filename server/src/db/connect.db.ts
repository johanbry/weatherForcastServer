import { Db, MongoClient } from 'mongodb';

let dbConnection: Db;

// THIS IS HOW WE EXPORT THINGS IN NODE APPLICATION!

// Connect to database
// passing in an argument (an callback fucntion) that we want to run after we established the connection.
export const connectToDb = (cb: Function) => {
  // This is an asynchronose task - and returns a promise.
  //connection string on our computer, or when we publish on Mongo Atlas.
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5x1ex9p.mongodb.net/${process.env.DB_NAME}`;

  MongoClient.connect(uri)
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

// Retrive once we have a connection "communicate"
// Return a value which is the database connection.
export const getDb = () => dbConnection;

// db connection. Only listen to request if no error occurs. Only after we sucessfully connected to the database!

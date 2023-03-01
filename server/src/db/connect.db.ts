import { Db, MongoClient } from 'mongodb';

let dbConnection: Db;

const createConnection = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5x1ex9p.mongodb.net/${process.env.DB_NAME}`;
    const client = await MongoClient.connect(uri);

    dbConnection = client.db();

    console.log('Database connection created');
  } catch (err) {
    throw err;
  }
};
const getConnection = (): Db => {
  return dbConnection;
};

export { createConnection, getConnection };

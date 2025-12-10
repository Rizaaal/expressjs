import { Db, MongoClient } from 'mongodb';
export const client = new MongoClient(
  `mongodb://${process.env.MONGOHOST || process.env.MONGOHOST_DEV}:${
    process.env.MONGOPORT
  }`,
  {
    auth: {
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD
    }
  }
);

let db: Db;

async function connect() {
  await client.connect();
  console.log('Database Connected successfully to server!');
  db = client.db('shopping-list');
}

const getItems = () => {
  const collection = db.collection('items');
  return collection.find({}).toArray();
};

module.exports = {
  connect,
  getItems
};

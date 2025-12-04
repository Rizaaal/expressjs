import { Db, MongoClient } from 'mongodb';

const url = 'mongodb://nozomi.proxy.rlwy.net:44778';
export const client = new MongoClient(url, {
  auth: {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD
  }
});

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

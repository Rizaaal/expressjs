import { Db, MongoClient } from 'mongodb';
export const client = new MongoClient(
  `mongodb://${process.env.MONGOHOST || process.env.MONGOHOST_DEV}:${
    process.env.MONGOPORT
  }`,
  {
    auth: {
      username: process.env.MONGOUSER,
      password: process.env.MONGOPASSWORD
    }
  }
);

let db: Db;

async function connect() {
  await client.connect();
  console.log('Database Connected successfully to server!');
  console.log(
    'client: ',
    `mongodb://${process.env.MONGOHOST || process.env.MONGOHOST_DEV}:${
      process.env.MONGOPORT
    }`
  );
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

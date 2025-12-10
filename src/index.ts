import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  config();
}
// call after config() to access the env variables
import { app } from './api';

const { connect } = require('./db');
const port = Number(process.env.PORT) || 3333;
const address = '::';

// connect db
connect()
  .then((client) => {
    app.listen(port, address, () => {
      console.log(`API available on ${address}:${port}`);
      console.log('MONGOHOST: ', process.env.MONGOHOST);
    });
  })
  .catch((error) => console.error(error));

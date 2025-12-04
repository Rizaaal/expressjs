import express from 'express';
import cors from 'cors';
const { getItems } = require('./db');

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', async (req, res) => {
  res.status(200).send({ status: 'ok' });
});

app.get('/items', async (req, res) => {
  const items = await getItems();
  res.json(items);
});

const api = express.Router();

// Version the api
app.use('/api/v1', api);

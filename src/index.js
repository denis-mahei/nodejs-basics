import express from 'express';
import * as fs from 'node:fs/promises';
import { PATH_DB } from './constants/products.js';

const app = express();

const PORT = 3000;

app.get('/products', async (req, res) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(data);
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});

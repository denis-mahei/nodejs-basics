import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const readProducts = async () => {
  const data = await fs.readFile(PATH_DB);
  return JSON.parse(data.toString());
};

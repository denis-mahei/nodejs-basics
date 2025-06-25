import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_FILES_DIR } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';

export const createProductsFiles = async () => {
  const data = await readProducts();
  for (const datum of data) {
    const fileName = datum.name.toLowerCase().split(' ').join('-');
    const filePath = path.resolve(PATH_FILES_DIR, `${fileName}.json`);
    await fs.writeFile(filePath, JSON.stringify(datum, null, 2));
  }
  console.log('Files created!🧾');
};

createProductsFiles();

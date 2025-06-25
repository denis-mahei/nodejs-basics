import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const modifyProducts = async () => {
  const data = await readProducts();
  const modifiedProd = data.map((item) => {
    const { description, ...rest } = item;
    return rest;
  });
  await writeProducts(modifiedProd);
};

const run = async () => {
  await modifyProducts();
  console.log('Products updated without description ✅');
};

run();

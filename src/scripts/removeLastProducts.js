import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const removeLastProducts = async () => {
  const data = await readProducts();

  const getLast = data.slice(0, -1);

  return await writeProducts(getLast);
};

removeLastProducts();

import { readProducts } from '../utils/readProducts.js';

export const createProductsFiles = async () => {
  const data = await readProducts();
};

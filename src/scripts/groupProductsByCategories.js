import { readProducts } from '../utils/readProducts.js';

export const groupProductsByCategories = async () => {
  const data = await readProducts();
};

import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  const existingProducts = await readProducts();
  const newProducts = Array.from({ length: number }, () => createFakeProduct());
  const allProducts = [...existingProducts, ...newProducts];
  return await writeProducts(allProducts);
};

generateProducts(5);

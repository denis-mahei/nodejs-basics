import { readProducts } from '../utils/readProducts.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const addOneProduct = async () => {
  const existingProducts = await readProducts();
  const newProduct = createFakeProduct();
  const updatedProduct = [...existingProducts, newProduct];
  return await writeProducts(updatedProduct);
};
addOneProduct();

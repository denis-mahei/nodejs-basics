import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async () => {
  const products = await readProducts();
  return products.reduce((acc, product) => acc + Number(product.price), 0);
};

const run = async () => {
  const result = await getTotalPrice();
  console.log(result);
};
run();

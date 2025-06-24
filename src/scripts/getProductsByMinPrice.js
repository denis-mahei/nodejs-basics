import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (price) => {
  const products = await readProducts();
  return products.filter((product) => Number(product.price) >= price);
};

const run = async () => {
  const result = await getProductsByMinPrice('812');
  console.log(result);
};
run();

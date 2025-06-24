import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
  const data = await readProducts();
  return data.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, []);
};

const run = async () => {
  const result = await getUniqueCategories();
  console.log(result);
};
run();

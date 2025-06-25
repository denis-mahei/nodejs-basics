import { readProducts } from '../utils/readProducts.js';

export const mostExpensiveProducts = async () => {
  const data = await readProducts();
  const filteredProd = data.reduce((acc, item) => {
    if (Number(item.price) > 500) {
      acc.push(item.name);
    }
    return acc;
  }, []);
  return filteredProd;
};
const run = async () => {
  const result = await mostExpensiveProducts();
  console.log(result);
};

run();

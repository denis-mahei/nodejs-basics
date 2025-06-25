import { readProducts } from '../utils/readProducts.js';

export const groupProductsByCategories = async () => {
  const data = await readProducts();
  const groupedProducts = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.name);

    return acc;
  }, {});
  return groupedProducts;
};

const run = async () => {
  const result = await groupProductsByCategories();
  console.log(result);
};

run();

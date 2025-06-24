import { readProducts } from '../utils/readProducts.js';

export const getProductsById = async (id) => {
  const products = await readProducts();
  return products.find((product) => product.id === id);
};

const id = process.argv[2];

getProductsById(id).then((product) => {
  if (product) {
    console.log(product.name);
  } else {
    console.log('Product not found');
  }
});

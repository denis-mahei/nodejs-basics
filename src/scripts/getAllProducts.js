import { readProducts } from '../utils/readProducts.js';

export const getAllProducts = async () => await readProducts();

console.log(await getAllProducts());

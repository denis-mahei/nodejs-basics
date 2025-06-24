import { writeProducts } from '../utils/writeProducts.js';

export const removeAllProducts = async () => await writeProducts([]);

removeAllProducts();

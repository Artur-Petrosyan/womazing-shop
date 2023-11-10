import axios from './axios';

export const getProductsByCategory = async (category) => axios({
  method: 'GET',
  url: `/products?category_like=${category}`,
});

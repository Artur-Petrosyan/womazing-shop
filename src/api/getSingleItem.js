import axios from './axios';

export const getSingleItem = async (id) => axios({
  method: 'GET',
  url: `products/?id=${id}`,
});

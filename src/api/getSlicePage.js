import axios from './axios';

export const getSlicePage = async (number) => axios({
  method: 'GET',
  url: `/products?_page=${number}&_limit=9`,
});

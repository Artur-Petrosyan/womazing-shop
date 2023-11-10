import axios from './axios';

export const getCategories = async () => axios({
  method: 'GET',
  url: 'categories',
});

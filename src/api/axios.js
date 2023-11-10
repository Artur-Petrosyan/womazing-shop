import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL = 'http://localhost:3001/';
instance.defaults.method = 'POST';
instance.interceptors.response.use((config) => config.data, (config) => {
  const { status } = config.response;
  if (status === 404) {
    console.log(config);
  }
  return Promise.reject(config.response);
});

export default (config) => {
  const request = instance({ ...config });
  return request;
};

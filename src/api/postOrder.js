import axios from 'axios';

export const postOrder = async (data) => {
  axios.post('http://localhost:3001/user', {
    [data.phone]: {
      payload: data.payload,
      basket: data.basket,
    },
  });
};

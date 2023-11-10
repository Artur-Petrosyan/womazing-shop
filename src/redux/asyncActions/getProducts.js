import { API } from '../../api';
import { products } from '../actions/productsAction';

export const getProduct = () => async (dispatch) => {
  await API.products.getProducts()
    .then((product) => dispatch(products(product)));
};

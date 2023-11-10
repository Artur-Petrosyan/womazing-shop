import { GET_PRODUCTS } from '../reducers/storeReducer';

export const products = (products) => ({ type: GET_PRODUCTS, products });

export const GET_PRODUCTS = 'GET_PRODUCTS';

const productsReducer = (state = [], { type, products }) => {
  switch (type) {
    case GET_PRODUCTS: return products;
    default: return state;
  }
};
export default productsReducer;

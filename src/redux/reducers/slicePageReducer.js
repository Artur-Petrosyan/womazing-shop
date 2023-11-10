export const SET_PRODUCT = 'SET_PRODUCT';

const slicePageReducer = (state = [], { type, sliceProduct }) => {
  switch (type) {
    case 'SET_PRODUCT': return sliceProduct;
    default: return state;
  }
};

export default slicePageReducer;

export const FILTRED_CATEGORY_PRODUCT = 'FILTRED_CATEGORY_PRODUCT';

const productByCategory = (state = [], { type, filtredCategory }) => {
  switch (type) {
    case FILTRED_CATEGORY_PRODUCT: return filtredCategory;
    default: return state;
  }
};
export default productByCategory;

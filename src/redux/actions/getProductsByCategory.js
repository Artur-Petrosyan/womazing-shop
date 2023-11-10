import { FILTRED_CATEGORY_PRODUCT } from '../reducers/productByCategoryReducer';

export const categoryProduct = (filtredCategory) => ({
  type: FILTRED_CATEGORY_PRODUCT,
  filtredCategory,
});

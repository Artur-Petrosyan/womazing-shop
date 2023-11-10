import { API } from '../../api';
import { categoryProduct } from '../actions/getProductsByCategory';

export const getProductsByCategory = (category) => async (disptach) => {
  console.log(category);
  await API.productByCategory.getProductsByCategory(category)
    .then((filtredCategory) => disptach(categoryProduct(filtredCategory)))
    .catch((err) => console.log(err));
};

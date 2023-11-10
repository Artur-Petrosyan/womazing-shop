import { API } from '../../api';
import { categories } from '../actions/getCategories';

export const getCategory = () => async (dispatch) => {
  await API.getCategories.getCategories()
    .then((category) => dispatch(categories(category)));
};

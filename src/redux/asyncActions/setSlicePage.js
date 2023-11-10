import { API } from '../../api';
import { slicePage } from '../actions/setSlicePage';

export const setSlicePage = (number = 1) => async (dispatch) => {
  await API.getSlicePage.getSlicePage(number)
    .then((sliceItems) => dispatch(slicePage(sliceItems)));
};

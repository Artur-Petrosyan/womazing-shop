import { GET_SINGLE_ITEM } from '../reducers/singleItemByIdReducer';

export const singleItem = (singleItem) => ({ type: GET_SINGLE_ITEM, singleItem });

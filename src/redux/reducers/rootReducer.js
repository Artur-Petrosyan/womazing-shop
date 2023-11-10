import { combineReducers } from '@reduxjs/toolkit';
import sliderReducer from './sliderReducer';
import productsReducer from './storeReducer';
import basketReducer from './basketReducer';
import toBasketReducer from './toBasketreducer';
import sizeReducer from './sizeReducer';
import backCallReducer from './backCallReducer';
import singleItemReducer from './singleItemreducer';
import slicePageReducer from './slicePageReducer';
import categoriesReducer from './categoriesReducer';
import productByCategory from './productByCategoryReducer';
import singleItemById from './singleItemByIdReducer';
import orederReducer from './orderReducer';

const rootReducer = combineReducers({
  slider: sliderReducer,
  products: productsReducer,
  basket: basketReducer,
  toBasket: toBasketReducer,
  size: sizeReducer,
  currentUser: backCallReducer,
  singleItem: singleItemReducer,
  slicePage: slicePageReducer,
  categories: categoriesReducer,
  filtredCategory: productByCategory,
  singleItemById,
  order: orederReducer,
});

export default rootReducer;

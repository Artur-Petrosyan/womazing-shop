export const SET_CATEGORIES = 'SET_CATEGORIES';

const categoriesReducer = (state = [], { type, category }) => {
  switch (type) {
    case SET_CATEGORIES: return category;
    default: return state;
  }
};

export default categoriesReducer;

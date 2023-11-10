export const GET_SINGLE_ITEM = 'GET_SINGLE_ITEM';

const singleItemById = (state = [], { type, singleItem }) => {
  switch (type) {
    case 'GET_SINGLE_ITEM': return singleItem;
    default: return state;
  }
};

export default singleItemById;

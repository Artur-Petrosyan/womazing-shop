const singleItemReducer = (state = [], {
  type,
}) => {
  switch (type) {
    case 'ADD_QUANTITY': return [...state];
    default: return state;
  }
};

export default singleItemReducer;

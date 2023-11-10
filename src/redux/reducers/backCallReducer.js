export const BACK_CALL = 'BACK_CALL';

const backCallReducer = (state = [], { type, data }) => {
  switch (type) {
    case 'BACK_CALL': return [...state, data];
    default: return state;
  }
};

export default backCallReducer;

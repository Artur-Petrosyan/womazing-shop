export const ADD_ORDER = 'ADD_ORDER';

const orederReducer = (state = [], {
  type, payload,
}) => {
  switch (type) {
    case ADD_ORDER: return [...state,
      payload,
    ];
    default: return state;
  }
};

export default orederReducer;

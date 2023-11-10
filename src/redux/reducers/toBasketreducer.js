export const TO_BASKET = 'TO_BASKET';
const toBasketReducer = (state = [], { type, id }) => {
  switch (type) {
    case TO_BASKET: return { id };
    default: return state;
  }
};
export default toBasketReducer;

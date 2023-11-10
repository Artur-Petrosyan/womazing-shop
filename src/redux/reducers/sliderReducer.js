export const TO_LEFT = 'TO_LEFT';
export const TO_RIGHT = 'TO_RIGHT';

const sliderReducer = (state = [], { type }) => {
  switch (type) {
    case TO_LEFT: return [];
    case TO_RIGHT: return [];
    default: return state;
  }
};

export default sliderReducer;

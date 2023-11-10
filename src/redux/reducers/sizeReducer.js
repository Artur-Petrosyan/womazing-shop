export const SELECT_COLOR = 'SELECT_COLOR';
export const CHECK_SIZE = 'CHECK_SIZE';
const size = [
  { name: 'S', select: false },
  { name: 'M', select: false },
  { name: 'L', select: false },
  { name: 'XL', select: false },
  { name: 'XXL', select: false },
];
const sizeReducer = (state = size, {
  type, id, name, color,
}) => {
  switch (type) {
    case CHECK_SIZE: return state.map((item) => {
      if (item.name === name) {
        return { ...item, select: true, id };
      } return { ...item, select: false, id };
    });
    case SELECT_COLOR: return state.map((item) => {
      if (item.select === true) {
        return { ...item, color };
      } return { ...item, color };
    });
    default: return state;
  }
};
// *

export default sizeReducer;

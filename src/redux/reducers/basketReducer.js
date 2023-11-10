export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const REMOVE_ALL = 'REMOVE_ALL';

const getLocalStorageCart = () => JSON.parse(localStorage.getItem('basket'));
const localCart = getLocalStorageCart();
const basketReducer = (state = localCart || [], {
  type, product, quantity, id,
}) => {
  if (type === 'ADD') {
    let newState = [...state];
    const found = state.find((item) => item.id === product.id);
    if (found) {
      newState = newState.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: quantity + 1 };
        }
        return item;
      });
    } else newState.push({ ...product, quantity: 1 });
    localStorage.setItem('basket', JSON.stringify(newState));
    state = newState;
  }
  if (type === REMOVE) {
    const filterState = state.filter((item) => item.id !== id);
    localStorage.setItem('basket', JSON.stringify(filterState));
    return filterState;
  }
  if (type === REMOVE_ALL) {
    const removeAll = [];
    localStorage.setItem('basket', JSON.stringify(removeAll));
    return removeAll;
  }
  return state;
};

export default basketReducer;

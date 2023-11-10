export const gettotalPrice = (state) => {
  let total = 0;
  state.forEach((item) => {
    total = (item.price * item.quantity) + total;
  });
  return total;
};

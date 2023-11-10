import { postOrder } from '../../api/postOrder';
import { ADD_ORDER } from '../reducers/orderReducer';

// export const setOrder = async ({
//   name,
//   email,
//   phone,
//   country,
//   city,
//   street,
//   home,
//   apartment,
// }) => {
//   const payload = {
//     buyer: {
//       name,
//       email,
//       phone,
//     },
//     recipient: {
//       address: {
//         country,
//         city,
//         street,
//         home,
//         apartment,
//       },
//     },
//   };
//   await postOrder();
//   return { type: ADD_ORDER, payload };
// };
export const setOrder = ({
  name,
  email,
  phone,
  country,
  city,
  street,
  home,
  apartment,
}, basket) => {
  const payload = {
    buyer: {
      name,
      email,
      phone,
    },
    recipient: {
      address: {
        country,
        city,
        street,
        home,
        apartment,
      },
    },
  };
  return async (dispatch) => {
    const res = await postOrder({ phone: payload.buyer.phone, payload, basket });

    return dispatch(({ type: ADD_ORDER, payload }));
  };
};

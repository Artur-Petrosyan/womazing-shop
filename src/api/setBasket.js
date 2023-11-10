import axios from "./axios";

export const setBasket = async (basket) => axios({ data: basket }, {
    method: "POST",
    url: 'basket'
},

)
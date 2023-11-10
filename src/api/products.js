import axios from "./axios";

export const getProducts = async () => axios({
    method: "GET",
    url: "products"
})
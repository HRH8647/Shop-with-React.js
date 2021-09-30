import axios from "axios";

const Base_Api = "https://fakestoreapi.com";

export const get_Products = async () => {
    const response = await axios.get(`${Base_Api}/products`);
    return response.data
}
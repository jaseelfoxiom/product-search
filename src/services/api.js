import axios from 'axios';

const BASE_URL = 'http://fakestoreapi.in/api/products';

export const fetchProducts = async (searchQuery) => {
    const response = await axios.get(`${BASE_URL}?limit=15&q=${searchQuery}`);
    console.log(response,"responseresponseresponseresponseresponseresponseresponseresponseresponse")
  return response.data.products;
};
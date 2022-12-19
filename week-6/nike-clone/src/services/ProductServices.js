import axios from 'axios';

import { PRODUCT_API_LINK } from '../constants';

export const getAllProducts = () => {
  return axios.get(PRODUCT_API_LINK);
}

export const getProductDetail = id => {
  return axios.get(`${PRODUCT_API_LINK}/${id}`)
}
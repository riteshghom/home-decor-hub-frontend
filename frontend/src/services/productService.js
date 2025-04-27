import axios from 'axios';
import config from '../config';

const productService = {
  getAllProducts: () => axios.get(config.PRODUCT_SERVICE_URL),
  getProductById: (id) => axios.get(`${config.PRODUCT_SERVICE_URL}/${id}`),
  createProduct: (product) => axios.post(config.PRODUCT_SERVICE_URL, product),
  deleteProduct: (id) => axios.delete(`${config.PRODUCT_SERVICE_URL}/${id}`)
};

export default productService;

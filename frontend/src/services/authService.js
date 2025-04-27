import axios from 'axios';
import config from '../config';

const authService = {
  register: (user) => axios.post(`${config.AUTH_SERVICE_URL}/register`, user),
  login: (user) => axios.post(`${config.AUTH_SERVICE_URL}/login`, user)
};

export default authService;

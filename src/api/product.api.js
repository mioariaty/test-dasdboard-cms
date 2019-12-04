import Axios from "axios";
import config from '../config';

Axios.create({
  baseURL: config.productAPI,
  timeout: 5000 
})

import axios from 'axios';

const config = {
  // baseURL: "http://192.168.15.11:3333"
  baseURL: "https://foodexplorer-api-owmn.onrender.com"
}

/**
 * @exports {AxiosInstance}
 */
export const api = axios.create(config);

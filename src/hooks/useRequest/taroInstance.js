import axios from 'axios';
import Taro from "@tarojs/taro";

const axiosConfig = {
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  responseType: 'json',
};

const AxiosInstance = Taro.baseurl

Taro.interceptors.response.use(
  (res) => {
    if (res.status !== 200 || !res.data) {
      throw 'error';
    }
    return res.data;
  },
  (error) => {
    throw error;
  }
);

export default AxiosInstance;

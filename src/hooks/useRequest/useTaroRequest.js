import useSWR from "swr";
import Taro from "@tarojs/taro";

const baseUrl = 'https://cnodejs.org/api/v1'

export const useTaroRequest = (request,config) => {
  request = {
    header: {'Content-Type': 'application/json;charset=UTF-8'},
    ...request,
    url: baseUrl+request.url,
  }

  const {
    data: response,
    error,
    mutate,
    isValidating,
    isLoading
  } = useSWR(request.url, async () => await Taro.request(request),config);

  return {
    data: response?.data,
    response,
    error,
    mutate,
    isValidating,
    isLoading
  };
};
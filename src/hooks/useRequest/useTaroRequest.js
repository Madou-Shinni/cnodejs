import useSWR from "swr";
import Taro from "@tarojs/taro";
import {BaseUrl} from "../../constants/api_base_url";

export const useTaroRequest = (request,config) => {
  request = {
    header: {'Content-Type': 'application/json;charset=UTF-8'},
    ...request,
    url: BaseUrl+request.url,
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

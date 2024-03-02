import useSWRInfinite from "swr/infinite";
import Taro from "@tarojs/taro";
import {BaseUrl} from "../../constants/api_base_url";

function getKey(pageIndex, url) {
  return `${BaseUrl+url}&page=${pageIndex+1}&limit=${15}`;
}

function useInfiniteRequest(request, config) {
    const {
        data: response,
        error,
        isValidating,
        mutate,
        size,
        setSize,
        isLoading
    } = useSWRInfinite(
            (pageIndex) => getKey(pageIndex, request.url),
            async (url) => await Taro.request({ url }),
            { ...config, revalidateFirstPage: false }
        )

    return {
        data: response?.map((item) => item.data),
        response,
        mutate,
        error,
        isValidating,
        size,
        setSize,
        isLoading
    };
}

export default useInfiniteRequest;

import {useTaroRequest} from "../hooks/useRequest/useTaroRequest";
import useInfiniteRequest from "../hooks/useRequest/useInfiniteRequest";

const defaultTopicsData = {
  page: 1,
  limit: 10,
  tab: 'all',
  mdrender: false
}
export const getTopics = (data) => {
  data = {...defaultTopicsData,...data}
  return useTaroRequest({
    url: "/topics",
    method: 'get',
    data
  })
}

export const getTopicsInfinite = (data) => {
  data = {...defaultTopicsData,...data}
  return useInfiniteRequest({
    url: `/topics?tab=${data.tab}&mdrender=${data.mdrender}`,
    method: 'get',
  })
}

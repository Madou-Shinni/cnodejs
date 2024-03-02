import {useTaroRequest} from "../hooks/useRequest/useTaroRequest";

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

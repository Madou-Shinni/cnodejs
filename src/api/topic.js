import {useTaroRequest} from "../hooks/useRequest/useTaroRequest";

export const getTopics = (data) => {
  return useTaroRequest({
    url: "/topics",
    method: 'get',
    data
  })
}

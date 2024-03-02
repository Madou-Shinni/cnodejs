import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {context} from "../store/store";
import {getTopics} from "../../../api/topic";
import {View} from "@tarojs/components";
import TopicList from "../../../components/TopicList";

const Content = observer(() => {
  const store = useContext(context)
  const {data} = getTopics({tag:store.category.key});


  return <View>
    <TopicList topics={data?.data} />
  </View>
})

export default Content

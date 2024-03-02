import {observer} from "mobx-react-lite";
import React, {useContext, useState} from "react";
import {context} from "../store/store";
import {getTopicsInfinite} from "../../../api/topic";
import {View,ScrollView} from "@tarojs/components";
import TopicList from "../../../components/TopicList";

const Content = observer(() => {
  const store = useContext(context)
  const [refresh, setRefresh] = useState(false)
  // const {data,mutate} = getTopics({tab:store.category.key});
  const {data:pages,size,setSize,isLoading,isValidating,mutate} = getTopicsInfinite({tab:store.category.key});
  const onScrollToLower = async () => {
    if (isValidating) return
    await setSize(size+1)
  }
  const handleRefresh = async () => {
    if (isValidating) return
    setRefresh(true); // 开始刷新时将 refresh 设置为 true
    await setSize(1); // 重置页数为 1
    await mutate(); // 重新加载数据
    setRefresh(false); // 刷新完成后将 refresh 设置为 false
  }

  return <View>
    <ScrollView
      scrollY
      style={{ height: '100vh' }}
      scrollWithAnimation
      lowerThreshold={50}
      upperThreshold={50}
      onScrollToLower={onScrollToLower}
      refresherEnabled
      refresherTriggered={refresh}
      onRefresherRefresh={handleRefresh}
    >
      {pages?.map((list,index)=>{
        return <TopicList topics={list.data} />
      })}
    </ScrollView>
  </View>
})

export default Content

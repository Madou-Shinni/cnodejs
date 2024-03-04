import Taro from "@tarojs/taro";
import {AtLoadMore} from "taro-ui";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {View,ScrollView} from "@tarojs/components";
import {context} from "../store/store";
import {getTopicsInfinite} from "../../../api/topic";
import TopicList from "../../../components/TopicList";

const Content = observer(() => {
  const store = useContext(context)
  const [refresh, setRefresh] = useState(false)
  // const {data,mutate} = getTopics({tab:store.category.key});
  const {data:pages,size,setSize,isLoading,isValidating,mutate} = getTopicsInfinite({tab:store.category.key});

  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // 获取屏幕高度
    const res = Taro.getSystemInfoSync();
    setScreenHeight(res.screenHeight);
  }, []);

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
      style={{ height: `${screenHeight}px` }}
      scrollWithAnimation
      lowerThreshold={50}
      upperThreshold={50}
      onScrollToLower={onScrollToLower}
      refresherEnabled
      refresherTriggered={refresh}
      onRefresherRefresh={handleRefresh}
    >
      {pages?.map((list,index)=>{
        return <TopicList key={index} topics={list.data} />
      })}
      <AtLoadMore
        className={`${isLoading ? '' : 'visible'}`}
        status={'loading'}
      />
    </ScrollView>
  </View>
})

export default Content

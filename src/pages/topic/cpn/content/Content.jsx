import {RichText, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {getTopic} from "../../../../api/topic";

const Content = () => {
  const {id} = Taro.getCurrentInstance().router.params
  const {data} = getTopic(id);

  return <View className={'px-[10px]'}>
    <RichText nodes={data?.data.content}/>
  </View>
}

export default Content

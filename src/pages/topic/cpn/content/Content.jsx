import {RichText, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {AtDivider} from "taro-ui";
import {getTopic} from "../../../../api/topic";
import Reply from "../../../../components/Reply";


const Content = () => {
  const {id} = Taro.getCurrentInstance().router.params
  const {data} = getTopic(id);

  return <View className={'px-[10px]'}>
    <RichText nodes={data?.data.content}/>
    <AtDivider content='' />
    <Reply replies={data?.data.replies}/>
  </View>
}

export default Content

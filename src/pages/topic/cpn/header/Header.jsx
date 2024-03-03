import {Text, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {getTopic} from "../../../../api/topic";
import formatTimeAgo from "../../../../utils/time";
import styles from './Header.module.less'

const Header = () => {
  const {id} = Taro.getCurrentInstance().router.params
  const {data} = getTopic(id);

  return <View className={'px-[10px]'}>
    <Text className={'text-start font-bold text-2xl'}>{data?.data.title}</Text>
    <View className={`${styles.information} flex justify-start flex-wrap-reverse gap-[10px]`}>
      <Text className={`${styles['info-item']} text-sm text-[#838383]`}>发布于 {formatTimeAgo(data?.data.create_at)}</Text>
      <Text className={`${styles['info-item']} text-sm text-[#838383]`}>作者 {data?.data.author.loginname}</Text>
      <Text className={`${styles['info-item']} text-sm text-[#838383]`}>{data?.data.visit_count} 次浏览</Text>
      <Text className={`${styles['info-item']} text-sm text-[#838383]`}>来自 {data?.data.tab}</Text>
    </View>
  </View>
}

export default Header


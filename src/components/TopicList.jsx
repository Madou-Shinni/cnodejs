import Taro from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import {AtAvatar, AtList} from "taro-ui";
import {categoriesMap} from "../constants/category";
import formatTimeAgo from "../utils/time";

const ReplayCount = ({replayCount, visits}) => {
  return <View className={`flex items-center text-[#b4b4b4]`}>
    <Text className={'text-[#9e78c0] text-xl'}>{replayCount > 99 ? '99+' : replayCount}</Text>
    /
    <Text className={`text-[#b4b4b4]`}>{visits > 99 ? '99+' : visits}</Text>
  </View>
}
const Topic = ({id,avatar,replayCount,visits,tab,good,title,createAt}) => {
  const handleClick = () => {
    Taro.navigateTo({ url: `/pages/topic/index?id=${id}` })
  }

  return <View className={'flex flex-nowrap items-center gap-x-[10px] active:bg-[#e9ecef]'}
    onClick={handleClick}
  >
    <AtAvatar image={avatar} className={'shrink-0'} />
    <ReplayCount replayCount={replayCount} visits={visits} />
    <Text className={`w-[350px] shrink-0 whitespace-nowrap overflow-hidden overflow-ellipsis text-xl font-bold ${good ? 'text-[#9e78c0]' : 'text-[#333]'}`}>{title}</Text>
    <Text className={'w-[150px] text-sm text-end text-[#777]'}>{formatTimeAgo(createAt)}</Text>
  </View>
}

const TopicList = ({topics,className}) => {
  return <View className={`index ${className ? className : ''}`}>
    <AtList className={'flex flex-col justify-center gap-y-[20px] pt-[20px] px-[20px]'}>
      {topics?.map((item)=>(
        <Topic key={item.id} id={item.id} avatar={item.author.avatar_url} replayCount={item.reply_count} visits={item.visit_count} tab={categoriesMap[item.tab]} good={item.good} title={item.title} createAt={item.create_at} />
      ))}
    </AtList>
  </View>
}

export default TopicList
export {Topic}

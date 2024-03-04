import Taro from "@tarojs/taro";
import {RichText, Text, View,Input} from "@tarojs/components";
import {AtAvatar, AtIcon} from "taro-ui";
import {useState} from "react";
import formatTimeAgo from "../utils/time";
import {buildReplyTree} from "../utils/build_reply";

const ReplyInput = ({className}) => {

  const [focus, setFocus] = useState(false)
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  const handleFocus = (e) => {
    setFocus(true)
  };

  const handleBlur = (e) => {
    setFocus(false)
    setKeyboardHeight(e.detail.height)
  };

  return <View className={`flex items-start gap-[10px] fixed left-0 bottom-0 right-0 h-[200px] bg-[#dadde1] max pt-2 pb-[50px] px-3 ${className}`} style={{'mar-gin': `${keyboardHeight}px`}}>
    <View className={`w-full rounded bg-white p-2`}>
      <Input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Enter text..."
      />
    </View>
    <AtIcon value={'edit'} />
  </View>
}

const ReplyContent = ({id,author,avatar,createAt,content}) => {
  const handleReply = () => {
    Taro.showToast({
      title: '功能正在开发中，敬请期待!',
      icon: 'none',
    })
  }

  return <View className={"flex items-start mb-2"}>
    <AtAvatar className={"w-8 h-8 rounded-full mr-2 shrink-0"} image={avatar} />
    <View className={'flex flex-col gap-y-[4px]'}>
      <View className={"header"}>
        <Text className={"text-m font-bold"}>{author}</Text>
        <Text className={'text-sm text-[#838383] ml-[10px]'}>{formatTimeAgo(createAt)}</Text>
      </View>
      <RichText className={"text-xs text-gray-500"} selectable onClick={handleReply} nodes={content} />
      <Text className={'text-xs text-gray-700 self-start'} onclick={handleReply}>回复</Text>
    </View>
  </View>
}

const Reply = ({replies}) => {

  // 将replies解析为两层型 如果 replies 为 undefined 或者 null，则设置为空数组
  const newReplies = buildReplyTree(replies || []);

  const showMore = () => {
    Taro.showToast({
      title: '功能正在开发中，敬请期待!',
      icon: 'none',
    })
  }

  return <View className={"p-4"}>
    {newReplies?.map((item)=>(
      <View key={item.id}>
        {/* root回复部分 */}
        <ReplyContent id={item.id} avatar={item.author.avatar_url} content={item.content} createAt={item.create_at} author={item.author.loginname}/>

        {/* children回复部分 */}
        {item.children.length > 0 ?
          <View className={"pl-12"}>
            {item.children?.map((v)=>(
              // 单条回复
              <ReplyContent key={v.id} id={v.id} avatar={v.author.avatar_url} content={v.content} createAt={v.create_at} author={v.author.loginname}/>
            ))}

            {/*展开更多回复按钮 */}
            <View className={"flex items-center text-sm text-gray-500 cursor-pointer"} onClick={showMore}>
              <Text>查看更多回复</Text>
            </View>
          </View> : <></>
        }
      </View>
    ))}
    <ReplyInput />
  </View>
}

export default Reply

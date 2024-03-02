import {View} from "@tarojs/components";
import {observer} from "mobx-react-lite";
import {AtDrawer, AtIcon, AtList, AtListItem} from "taro-ui";
import {useContext, useState} from "react";
import {categories} from "../../../constants/category";
import {context} from "../store/store";
import {getTopics} from "../../../api/topic";
import Taro from "@tarojs/taro";


const Header = observer(() => {
  const [show, setShow] = useState(false)
  const store = useContext(context)
  const {data,isLoading} = getTopics({tab:store.category.key});

  if (!data && isLoading) {
    Taro.showLoading({
      title: 'loading',
      mask: false
    })
  }

  if (data) {
    Taro.hideLoading()
  }

  const onClose = () => {
    setShow(false)
  }

  const onShow = () => {
    setShow(true)
  }

  const handleClick = (v) => {
    setShow(false)
    store.setCategory(v)
  }

  return <>
    <View className={'flex items-center justify-between w-full h-[80px] leading-[80px]'}>
      <AtIcon value={'bullet-list ml-[40px]'} size={24} onClick={onShow} />
      <View className={'text-m'}>{store.category.label}</View>
      <AtIcon value={'user mr-[40px]'} size={24} />
    </View>
    <AtDrawer
      show={show}
      mask
      onClose={onClose}
      width={'33.3%'}
    >
      <AtList>
        {categories.map((item)=>(
          <AtListItem key={item.key} title={item.label} arrow={"right"} onClick={() => handleClick(item)} />
        ))}
      </AtList>
    </AtDrawer>
  </>
})

export default Header

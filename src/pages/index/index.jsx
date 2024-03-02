import {View} from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import Header from "./cpn/Header";
import Content from "./cpn/Content";

const Index =  () => {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Header />
      <Content/>
    </View>
  )
}

export default Index

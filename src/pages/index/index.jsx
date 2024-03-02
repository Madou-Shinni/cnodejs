import {View} from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import Header from "./cpn/Header";

const Index =  () => {

  useLoad(() => {

    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Header />
    </View>
  )
}

export default Index

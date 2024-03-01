import {Button, View} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'
import Header from "./cpn/Header";
import Footer from "./cpn/Footer";
import Question from "./cpn/Question";
import {useContext, useState} from "react";
import {context} from "./store/store";
import {observer} from "mobx-react-lite";
import {getTopics} from "../../api/topic";

const Index =  observer(() => {

  useLoad(() => {

    console.log('Page loaded.')
  })



  const {data,isLoading} = getTopics({page:1,limit:10});

  const storeCtx = useContext(context)


  const [show, setShow] = useState(false)

  return (
    <View className='index'>
      <Header/>
      {show && <Question onClose={() => setShow(false)}/>}
      {storeCtx.count}
      {data?.data?.map((v)=>{
        return <View>{v.id}</View>
      })}
      <Button className={'w-full cursor-pointer'} onClick={() => storeCtx.increment()}>加+</Button>
      <Footer showQuestionClick={() => setShow(true)}/>
    </View>
  )
})

export default Index

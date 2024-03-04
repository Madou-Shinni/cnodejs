import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import Header from "./cpn/header/Header";
import {getTopic} from "../../api/topic";
import Content from "./cpn/content/Content";

const Index = () => {
  const {id} = Taro.getCurrentInstance().router.params
  const {data,isLoading} = getTopic(id);
  if (!data && isLoading) {
    Taro.showLoading({
      title: '加载中',
    })
  }
  if (data) {
    Taro.hideLoading()
  }

  return <View>
    <Header />
    <Content/>
  </View>
}

export default Index

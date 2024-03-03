import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import Header from "./cpn/header/Header";
import {getTopic} from "../../api/topic";

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

  console.log(data)

  return <View>
    <Header />
  </View>
}

export default Index

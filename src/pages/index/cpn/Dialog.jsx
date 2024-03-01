import {View} from "@tarojs/components";

const Dialog = (props) => {
  return <View className={`w-full h-full fixed left-0 top-0 z-10 bg-gray-400`}>
    {props.children}
  </View>
}

export default Dialog

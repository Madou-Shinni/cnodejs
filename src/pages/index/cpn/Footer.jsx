import {Button, View} from "@tarojs/components";

const Footer = ({showQuestionClick}) => {

  const handleClick = () => {
    showQuestionClick()
  }

  return <View>
    <Button onClick={handleClick} className={'fixed left-0 bottom-0 w-full bg-slate-50'} >提问</Button>
  </View>
}

export default Footer

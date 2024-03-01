import {Button, Input, Textarea, View} from "@tarojs/components";
import Dialog from "./Dialog";

const Question = ({onClose}) => {
  const handleClose = () => {
    onClose()
  }

  return <Dialog>
    <View className={'flex flex-col items-center my-[30px] mx-auto w-[80%] px-[10px] bg-slate-50 rounded-[8px]'}>
      <Input className={'w-full border-b-[1px] border-[#000]'}  placeholder={'输入问题'} />
      <Textarea className={'w-full'} placeholder={'输入回答'} />
      <View className={'flex justify-between px-[10px] w-full'}>
        <Button>确定</Button>
        <Button onClick={handleClose}>取消</Button>
      </View>
    </View>
  </Dialog>
}

export default Question

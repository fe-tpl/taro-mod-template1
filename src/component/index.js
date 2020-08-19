import "./index.less";
import Nerv, { Component } from 'nervjs'; // 这句话不允许做任何改动
import { View } from "@tarojs/components";
export default class TaroTpl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...window['${module-name}'],// 这里不要做任何修改，不允许删除
      ...props.mockData,
    }
  }
  // 生命周期-获取数据的钩子函数
  async componentDidMount() {

  }

  onClickHandle = async () => {
    // todo 若一个模块需要在h5环境下使用，某些操作需要判断环境变量来区分，
    // todo 通过Taro.getEnv()方法来获取环境
    if (Taro.getEnv() == "WEB") {
      window.location.href = "https://www.aliyun.com";
    } else {
      Taro.navigateTo({
        url: "www.aliyun.com"
      })
    }
  }

  render() {
    return (
      <View onClick={this.onClickHandle}>
        {this.state.message}
      </View>
    )
  }
}

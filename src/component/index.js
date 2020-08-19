import "./index.less";
import Nerv, { Component } from 'nervjs'; // 这句话不允许做任何改动
// import Taro, { Component } from "@tarojs/taro"; // 这句话不允许任何改动
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

  }

  render() {
    return (
      <View onClick={this.onClickHandle}>
        {this.state.message}
      </View>
    )
  }
}

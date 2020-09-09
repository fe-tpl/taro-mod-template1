import "./index.less";
import Nerv, { Component } from 'nervjs'; // 这句话不允许做任何改动
import Taro from "@tarojs/taro"; // 这句话不允许做任何改动
import { View } from "@tarojs/components";

const baseRate = 10 / 750;
const convertPxToRem = function (px) {
  if (Taro.getEnv() == "WEB") {
    console.log(" =======")
    return `${px * baseRate}rem`;
  } else {
    return `${px}rpx`;
  }
};

/**
 * 将px转换成html
 * @param {string} tplHtml 模板html
 * @return {string} 返回转换处理后的html字符串
 */
const convertHtmlPxToRem = function (tplHtml) {
  let regExp = /\d+px/gm;
  let match = tplHtml.match(regExp);
  match = match || [];
  for (let i = 0; i < match.length; i++) {
    let regExp1 = /(\d+)px/gm;
    let px = 0;
    if (regExp1.test(match[i])) {
      px = Number(RegExp.$1);
    }
    if (Taro.getEnv() == "WEB") {
      tplHtml = tplHtml.replace(`${match[i]}`, `${px * baseRate}rem`);
    } else {
      tplHtml = tplHtml.replace(`${match[i]}`, `${px}rpx`);
    }
  }
  return tplHtml;
}

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
      <View className="freedom-module-wrapper">
        <View className="${module-name}">
          {/* <>---在这里书写组件内容---begin</> */}
          <View onClick={this.onClickHandle}>
            {this.state.message}
          </View>
          {/* <>---在这里书写组件内容---end</> */}
        </View>
      </View>
    )
  }
}

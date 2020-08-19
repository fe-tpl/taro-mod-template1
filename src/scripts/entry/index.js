import Nerv from 'nervjs';
import Comp from "../../component/index.js";
class TaroModTpl {
  constructor(moduleWrapperEle) {
    this.moduleWrapperEle = moduleWrapperEle;
    let dataStr = this.moduleWrapperEle.firstElementChild.value;
    this.data = JSON.parse(decodeURIComponent(dataStr)) || {};
    this.render();
  }
  render() {
    Nerv.render(<Comp mockData={this.data} />, this.moduleWrapperEle.children[1]);
  }
}
let moduleEles = document.querySelectorAll(".freedom-module-wrapper${module-name}");
for (var i = 0; i < moduleEles.length; i++) {
  new TaroModTpl(moduleEles[i]);
}

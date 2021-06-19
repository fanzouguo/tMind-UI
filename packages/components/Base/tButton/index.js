// @ts-nocheck
// 导入组件
import tButton from './tButton.vue';

// 为组件提供 install 安装方法，供按需引入
tButton.install = function (Vue) {
  Vue.component(tButton.name, tButton);
};

// 默认导出组件
export default tButton;

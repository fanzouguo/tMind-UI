// @ts-nocheck
// 导入组件
import tColorPicker from './tColorPicker.vue';

// 为组件提供 install 安装方法，供按需引入
tColorPicker.install = function (Vue) {
  Vue.component(tColorPicker.name, tColorPicker);
};

// 默认导出组件
export default tColorPicker;

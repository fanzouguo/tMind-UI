// @ts-nocheck
import directive from '../../directive/clickoutside';
import loading from './Loading';

export default {
  install(Vue) {
    Vue.use(directive);
    Vue.prototype.$loading = loading;
  },
  directive,
  loading
};

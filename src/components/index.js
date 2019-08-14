import Icon from './icon/main/icon.vue';
import '../components/style/font/iconfont.js';
import './style/index.less';
const components = [Icon];

const UI = {
  install(vue) {
    components.forEach(component => {
      vue.component(component.name, component);
    });
  }
};
export default UI;
export { Icon };

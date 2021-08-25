import App from './App';
import Vue from 'vue';
import store from './store';
import ccUiPlugin from 'cc-ui-uni-app-zjh';
Vue.use(ccUiPlugin);

console.log('--------------111------------')
console.log(`Vue.prototype.$cc:`, Vue.prototype.$cc);
console.log(`uni.$cc:`, uni.$cc);

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  ...App,
  store
});
app.$mount();

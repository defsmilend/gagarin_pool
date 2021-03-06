import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/plugin/i18n'
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),store
}).$mount('#app')

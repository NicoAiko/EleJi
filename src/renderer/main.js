import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import router from './router';
import store from './store';

import locale from './locales/locale';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: window.navigator.language,
  fallbackLocale: 'en',
  messages: locale,
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>',
}).$mount('#app');

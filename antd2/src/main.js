import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//地址选择插件
import {regionData, CodeToText, TextToCode} from 'element-china-area-data';

import axios from 'axios';
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map

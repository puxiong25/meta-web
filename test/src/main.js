import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import metaWeb from '../../packages/core/src';
import performance from '../../packages/performance/src';
import recordscreen from '../../packages/recordscreen/src';

Vue.use(metaWeb, {
  dsn: 'http://localhost:8080/reportData', // 上报的地址
  apikey: 'abcd', // 项目唯一的id
  silentWhiteScreen: true, // 开启白屏检测
  skeletonProject: true, // 项目是否有骨架屏
  repeatCodeError: true, // 开启错误上报去重，重复的代码错误只上报一次
  userId: '123', // 用户id
  // 自定义hook, 根据接口返回的 response 判断请求是否正确
  handleHttpStatus(data) {
    console.log('data', data);
    let { url, response } = data;
    // code为200，接口正常，反之亦然
    let { code } = typeof response === 'string' ? JSON.parse(response) : response;
    if (url.includes('/getErrorList')) {
      return code === 200 ? true : false;
    } else {
      return true;
    }
  },
});
// 注册性能检测插件
metaWeb.use(performance);
// 注册页面录屏插件，设置单次录屏时长为20s，默认是10s
metaWeb.use(recordscreen, { recordScreentime: 15 });

Vue.use(ElementUI, { size: 'mini' });
Vue.config.productionTip = false;

setTimeout(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
}, 2000);

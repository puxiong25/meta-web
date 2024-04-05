<template>
  <div id="app">
    <template>
      <div class="header">
        <img class="logo" src="./assets/pp2.webp" alt="logo" />
        <h1 class="title">前端异常监控与定位</h1>
      </div>
      <nav>
        <router-link to="/">第一页</router-link> |
        <router-link to="/about">第二页</router-link>
      </nav>
      <router-view />
    </template>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  data() {
    return {
      beforeUnload: '',
      Handler: '',
    };
  },
  created() {
    // localStorage.clear();

    this.checkCloseWeb();
  },
  mounted() {
    // this.banSteal();

    let O = localStorage.getItem('_gap_time');
    let A = localStorage.getItem('_gap_time浏览器关闭');
    let B = localStorage.getItem('_gap_time浏览器刷新');
    let C = localStorage.getItem('currentTime');
    console.error('O _gap_time', O);
    console.error('A _gap_time浏览器关闭', A);
    console.error('B _gap_time浏览器刷新', B);
    console.error('C currentTime', C);

    // console.log('mounted navigator.connection', navigator.connection);
    // console.log('mounted navigator.connection luyin1', localStorage.getItem('luyin1'));
    // console.log('mounted navigator.connection luyin2', localStorage.getItem('luyin2'));
    // window.addEventListener('beforeunload', e => this.beforeunloadHandler(e));
    // window.addEventListener('unload', e => this.unloadHandler(e));
    // window.addEventListener('online', e => this.onlineHandler(e));
    // window.addEventListener('offline', e => this.offlineHandler(e));
    // window.addEventListener('visibilitychange', this.handleVisiable);
  },
  beforeDestroy() {
    // console.log('beforeDestroybeforeDestroybeforeDestroybeforeDestroybeforeDestroy');
    // console.log('beforeDestroy navigator.connection', navigator.connection);
    // localStorage.setItem('luyin1', navigator.connection);
  },
  destroyed() {
    // console.log('beforeDestroy navigator.connection', navigator.connection);
    // localStorage.setItem('luyin2', navigator.connection);
    // window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e));
    // window.removeEventListener('unload', e => this.unloadHandler(e));
    // window.removeEventListener('online', e => this.onlineHandler(e));
    // window.removeEventListener('offline', e => this.offlineHandler(e));
    // window.removeEventListener('visibilitychange', e => this.handleVisiable(e));
  },
  // beforeRouteLeave(to, from, next) {
  // this.scroll = document.getElementsByClassName(
  //     "el-table__body-wrapper"
  // )[0].scrollTop;
  // window.alert('beforeRouteLeave');

  // next();
  // },
  // beforePageLeave(tab, type) {
  //   console.log('beforePageLeave tab:', tab);
  //   console.log('beforePageLeave type:', type);
  //   alert(0);

  // 值未改变，则直接离开页签
  // if (this.editValue === this.value) return;

  // // 浏览器窗口刷新或者关闭时，支持的浏览器会展示确认消息
  // if (type === 'unload') {
  //   return `您在“${tab.title}”页签的更改尚未完成，是否要离开？`;
  // }

  // // 离开类型
  // const action = {
  //   close: '关闭',
  //   refresh: '刷新',
  //   replace: '替换',
  //   leave: '离开',
  // }[type];

  // const msg = `您确认要${action}页签“${tab.title}”吗？`;

  // // 返回 promise，resolve 离开，reject 阻止离开
  // return new Promise((resolve, reject) => {
  //   // 值改变则确认提示
  //   if (confirm(msg)) {
  //     resolve();
  //   } else {
  //     reject(`您拒绝了${action}页签`);
  //   }
  // });

  // 此处使用了 Element 的 confirm 组件
  // 需将 closeOnHashChange 配置为 false，以避免路由切换导致确认框关闭
  // return this.$confirm(msg, '提示', { closeOnHashChange: false })
  // },
  methods: {
    // beforeLoadResult() {
    //   console.log('beforeLoadResult beforeLoadResult');
    //   // location.reload(true);

    //   alert('你取消了离开网页！');
    // },
    banSteal() {
      document.onkeydown = e => {
        //禁用F12
        console.log('AAAAAAAA e', e);
        if (e && e.code == 'F12') {
          // if (e && e.code == 123) {
          // if (window.event && window.event.keyCode == 123) {
          return false;
          //禁用ctrl+shift+i  版本不同keyCode写法不同
          // } else if (e.ctrlKey && e.shiftKey && e.code == 73) {
          // } else if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {
          // return false;
          //屏蔽Shift+F10 版本不同keyCode写法不同
          // } else if (e.shiftKey && e.code == 121) {
          // } else if (window.event.shiftKey && window.event.keyCode == 121) {
          // return false;
        }
      };
      // 禁用右键
      document.oncontextmenu = new Function('event.returnValue=false');
    },
    checkCloseWeb() {
      var flagiii = '0';

      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      console.log('userAgent:', userAgent);
      var isOpera = userAgent.indexOf('Opera') > -1; //判断是否Opera浏览器
      var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; //判断是否IE浏览器
      var isIE11 = userAgent.indexOf('rv:11.0') > -1; //判断是否是IE11浏览器
      var isEdge = userAgent.indexOf('Edge') > -1 && !isIE; //判断是否IE的Edge浏览器
      function onloadFun() {
        console.error('onloadFun onloadFun');
        $.ajax({
          type: 'post',
          url: 'webLoginController.do?storageData',
          data: { flagiii: flagiii },
          success: function () {},
        });
      }

      if (isIE || isIE11 || isEdge) {
        console.error('页面加载进来后将flagii存入session');

        //页面加载进来后将flagii存入session
        onloadFun();
      }
      //兼容ie11 edge
      // if (isIE11 || isEdge) {
      //   console.error('兼容ie11 edge');

      //   window.onbeforeunload = function () {
      //     flagiii = '1';
      //     $.ajax({
      //       type: 'post',
      //       url: 'webLoginController.do?storageData',
      //       data: { flagiii: flagiii },
      //       success: function () {},
      //       async: false,
      //     });
      //   };
      //   window.onunload = function () {
      //     $.ajax({
      //       type: 'post',
      //       url: 'webLoginController.do?delSessionData',
      //       data: { rnd: Math.random() },
      //       success: function () {},
      //     });
      //   };
      // }
      //兼容chrome和firefox
      if (!isIE && !isEdge && !isIE11) {
        console.error('兼容chrome和firefox');

        var _beforeUnload_time = 0,
          _gap_time = 0;
        var is_fireFox = navigator.userAgent.indexOf('Firefox') > -1; //是否是火狐浏览器
        window.onunload = function () {
          let currentTime = new Date().getTime();
          _gap_time = currentTime - _beforeUnload_time;
          console.error('兼容chrome和firefox _gap_time:', _gap_time);
          localStorage.setItem('_gap_time', _gap_time);
          if (_gap_time > 1412) {
            // if (_gap_time > 1412) {
            $.post('webLoginController.do?delSession2'); //浏览器关闭
            console.error('兼容chrome和firefox 浏览器关闭');
            localStorage.setItem('_gap_time浏览器关闭', _gap_time);
            localStorage.setItem('currentTime', currentTime);
            // localStorage.setItem('_gap_time浏览器刷新', null);
            sessionStorage.clear();
          } else {
            console.error('兼容chrome和firefox 浏览器刷新');
            // localStorage.setItem('_gap_time浏览器关闭', null);
            localStorage.setItem('currentTime', currentTime);
            localStorage.setItem('_gap_time浏览器刷新', _gap_time);

            //浏览器刷新
          }
        };
        let timer = null;

        window.onbeforeunload = function (e) {
          // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
          //   console.info('这是一个刷新页面的操作');
          // } else {
          //   console.info('这是一个新访问页面的操作');
          // }

          // console.log(
          //   'onbeforeunload PerformanceNavigationTiming.type',
          //   PerformanceNavigationTiming.type
          // );
          // console.log(
          //   'onbeforeunload PerformanceNavigationTiming.toJSON()',
          //   PerformanceNavigationTiming.toJSON()
          // );

          // console.log('performance:', performance);
          // console.log('typeof performance:', typeof performance);
          // console.log(
          //   'performance.hasOwnProperty("navigation"):',
          //   performance.hasOwnProperty.call('navigation')
          // );
          // if (performance && performance.hasOwnProperty.call('navigation')) {
          //   console.log('performance.navigation.TYPE_RELOAD:', performance.navigation.TYPE_RELOAD);
          //   console.log('performance.navigation:', performance.navigation);
          // }
          // const observer = new PerformanceObserver(list => {
          //   console.log('list', list);

          //   list.getEntries().forEach(entry => {
          //     console.log('entry', entry.toJSON());
          //   });
          // });
          // console.log('observer', observer);
          // observer.observe({ entryTypes: ['navigation'] });

          // console.log(
          //   'onbeforeunload e.currentTarget.performance.navigation.type',
          //   e.currentTarget.performance.navigation.type
          // );
          // console.log(
          //   'onbeforeunload e.currentTarget.performance.navigation',
          //   e.currentTarget.performance.navigation
          // );

          // console.log('onbeforeunload document.body.clientWidth', document.body.clientWidth);
          // console.log('onbeforeunload e.clientX', e.clientX);
          // console.log('onbeforeunload e.clientY', e.clientY);
          // console.log('onbeforeunload e.altKey', e.altKey);

          console.log('onbeforeunload e', e);
          console.log('onbeforeunload window', window);
          _beforeUnload_time = new Date().getTime();
          if (is_fireFox) {
            //火狐关闭执行
            $.post('webLoginController.do?delSession2'); //浏览器关闭
          }
          // if (e) {
          // e.returnValue = true;
          // }
          function beforeloadResult() {
            clearTimeout(timer);
            alert('取消离开1');

            // location.reload(true);
            // location.reload(false);
          }
          timer = setTimeout(function () {
            setTimeout(beforeloadResult, 50);
          }, 50);

          e.preventDefault();
          return '真的离开?';
        };
        window.onunloadcancel = function () {
          clearTimeout(timer);
          alert('取消离开2');
          console.log('onunloadcancelonunloadcancel');
        };
      }
      //兼容ie8,9,10   这三个浏览器在刷新时先触发beforeunload事件，再触发unload事件。而在关闭时只触发beforeunload事件
      // if (isIE) {
      //   console.error('兼容ie8,9,10');

      //   window.onbeforeunload = function () {
      //     //alert(0);
      //     flagiii = '1';
      //     $.ajax({
      //       type: 'post',
      //       url: 'webLoginController.do?A',
      //       data: { flagiii: flagiii },
      //       success: function () {},
      //       async: false,
      //     });
      //   };
      //   window.onunload = function () {
      //     flagiii = '0';
      //     $.ajax({
      //       type: 'post',
      //       url: 'webLoginController.do?storageData',
      //       data: { flagiii: flagiii },
      //       success: function () {},
      //     });
      //   };
      // }
    },

    // onlineHandler(e) {
    //   console.log('用户已连接到互联网 e', e);
    // },
    // offlineHandler(e) {
    //   console.log('用户已断开与互联网的连接 e', e);
    //   if (navigator.onLine) {
    //     console.log('用户在线');
    //   } else {
    //     console.log('用户离线');
    //   }
    // },
    // handleVisiable(e) {
    //   //窗口可见时处理
    //   if (e.target.visibilityState === 'visible') {
    //     //重新对时初始化
    //     console.log('handleVisiable visible:', e);
    //   } else {
    //     console.log('handleVisiable hidden:', e);
    //   }
    // },
    // beforeunloadHandler(e) {
    //   console.log(
    //     'beforeunloadHandler wwindow.PerformanceNavigationTiming.type:',
    //     window.PerformanceNavigationTiming.type
    //   );
    //   console.log('beforeunloadHandler eee:', e);
    //   // debugger;
    //   this.beforeUnload = new Date().getTime();
    //   let msg = 'returnValue属性值的文字不能自定义，写不写都行的？';
    //   e.returnValue = msg;
    //   return msg;
    //   // console.log('this.beforeUnload', this.beforeUnload);

    //   // e = e || window.event;
    //   // if (e) {
    //   //   e.returnValue = '关闭提示';
    //   // }
    //   // debugger;
    //   // return '关闭提示';
    // },
    // unloadHandler(e) {
    //   console.log('unloadHandler eee:', e);
    //   this.Handler = new Date().getTime() - this.beforeUnload;
    //   console.log('this.Handler this.Handlereee:', this.Handler);

    //   //   e.preventDefault();
    //   //    // Chrome requires returnValue to be set
    //   // e.returnValue = '自定义文本';
    //   let msg = '';
    //   msg = '真的要关闭么？';
    //   e.returnValue = msg;
    //   return msg;
    //   //判断是窗口关闭还是刷新 如果小于5就是关闭  如果大于5就是刷新
    //   // if (this.Handler <= 5) {
    //   //   console.log(
    //   //     '为所欲为 wwindow.PerformanceNavigationTiming.type:',
    //   //     window.PerformanceNavigationTiming.type
    //   //   );
    //   //   msg = '真的要关闭么？';
    //   //   e.returnValue = msg;
    //   //   return msg;
    //   // } else {
    //   //   msg = '真的要刷新么？';
    //   //   e.returnValue = msg;
    //   //   return msg;
    //   // }
    // },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 10px;
  /* background-image: url(./assets/bubble.png); */
  .header {
    width: 100%;
    padding: 10px 0px;
    height: 60px;
    text-align: left;
    /* background-color: #ffffff;
    border-bottom: 1px solid #eee; */
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    .logo {
      width: 107px;
      height: 107px;
    }
    .title {
      margin-left: 10px;
      font-weight: bold;
    }
  }
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
}
</style>

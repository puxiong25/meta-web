document.onkeydown = () => {
  //禁用F12
  if (window.event && window.event.keyCode == 123) {
    return false;
    //禁用ctrl+shift+i,
  } else if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {
    return false;
    //屏蔽Shift+F10
  } else if (window.event.shiftKey && window.event.keyCode == 121) {
    return false;
  }
};
// 通过高顿判断是否打开控制台
// var threshold = 200;
// this.timer1 = setInterval(function () {
//   //当浏览器窗口宽度或高度与页面的宽度和高度的差值大于00的时候触发页面刷新
//   if (
//     window.outerWidth - window.innerWidth > threshold ||
//     window.outerHeight - window.innerHeight > threshold
//   ) {
//     // 刷新页面；
//     window.location.reload();
//     alert("请关闭控制台重新输入地址进入网站");
//   }
// });
document.oncontextmenu = new Function('event.returnValue=false');

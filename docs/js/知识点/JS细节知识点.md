---
title: JS细节知识点（请求头，rem，事件对象，自定义全局变量）
date: 2021-06-11
sidebar: auto
categories:
  - javascript
tags:
  - 前端
---

## 浏览器的请求头的使用

> 请求头：navigator 对象的 userAgent 属性，使用这个属性我们可以判断用户是在手机浏览器还是电脑上操作。

```javascript
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  ) {
    console.log("移动端");
  } else {
    console.log("pc端");
  }
}
browserRedirect();
```

##### 使用场景（目前能想到的）

- 很多网页是有分手机端和 pc 端的，可能是两套代码，放在两个不同的服务器或是域名不同，所以我们就可以根据这个，在最先进入的时候先判断环境，再进入指定环境下的网页
- JS 有个别特性是分浏览器或者手机环境的，根据这个我们可以判断用户使用安卓还是 ios 设备，做指定的处理

## rem 布局

> 移动端因为手机的尺寸不同，分辨率也不同，所以单单使用 px 来作为单位处理就会有很多问题，而使用 rem 计算来设置的单位就可以满足在不同尺寸的手机屏幕上显示效果基本是一致的

```javascript
(function(win, doc) {
  if (!win.addEventListener) return;
  var html = document.documentElement;
  function setFont() {
    var cliWidth = html.clientWidth;
    html.style.fontSize = 100 * (cliWidth / 750) + "px";
  }
  win.addEventListener("resize", setFont, false); // false 默认就是false 代表冒泡
  setFont();
})(window, document);
// 这样设置之后单位就可以统一使用rem，因为手机如iphone为例宽度一般是375px  因为代码里是/750 所以我们在计算的时候，举例：
// 原型图上宽度为100px 所以转换成rem是 100*2/100 = 2rem
// 原型图上字体大小为16px的时候 转成rem是 16*2/100 = 0.32rem
```

#### 总结

- 移动端的布局是基本一定要使用 rem 布局的
- 如果是框架开发，如 vue 的话，我们其实可以不用自己写这个立即执行函数，有一些库是可以帮我们封装好的，只需要在 webpack 文件中配置一下

## 事件参数 event 与使用细节

> 事件参数 event，或者 e，e 是 c#上是使用 e，代表的也就是事件触发的时候产生的句柄

```javascript
let btn = document.getElementById('app')
btn.onClick = (e)=>{
    // 当btn按钮被点击的时候 , 会给函数默认传递一个形参e,是可以直接接收使用的
}
btn.addEventListener('click',(e)=>{
    // 当按钮被点击的时候,这种事监听函数也会默认传递一个句柄 e
})

// 第三种方式
<div onClick="handle()"></div>
function handle(e){
    console.log(e) // e不是我们的事件对象  因为这个是通过html绑定函数添加的事件,html中没有给实参,所以函数中也就接收不到形参
    console.log(event) // 成功!  可以收到事件对象,就算没有传递,在事件处理函数的内部也是可以正常的接受到这个句柄
}
```

##### 总结

- 事件对象 event 就算形参没有写实参没有传,在函数内部也是可以直接访问这个对象
- 如果实参没有传,记得形参就不能用这个默认参数 e 来进行接受

## 自定义全局变量

> JS 有全局对象 Global,在浏览器中就是 window 对象,window 对象可以理解是 Global 对象的代理

```javascript
let str = "jimmy";
window[`no_${str}`] = "kkkk";
/*
	这样实际上可以创建全局变量.
	因为像如果是var关键字,创建的变量会被自动挂载在全局的window对象中,所以我们就可以基于window这个全局对象来创建它的自定义属性,就相当于是我们创建的全局变量
*/
```

##### 总结

- 这个方法可以为我们创建全局变量,利用的就是 window 全局对象
- 这样虽然可以解决问题,但是在现实开发中最好不好往 window 上挂载属性,因为这个容易会被覆盖,而且也是容易污染全局属性

## 其他

很久没有更新了，这次更新的内容都是自己踩过的坑，和之前一直没有理解的内容。因为最近都在看红宝书和忙着工作中的事情，所以更新的比较少，但是一直没有停止学习，总之既然成为了程序猿，就不能停止学习！近期会继续更新一下学习 react 的心得和一些自己遇到的坑，加油，奥里给！

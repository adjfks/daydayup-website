# vue中`$nextTick()`理解

本篇代码仓库[链接](https://github.com/adjfks/Mini-Code/tree/main/code/vue-source/1nextTick)

## 描述

Vue采用了异步更新DOM的策略，也就是说在数据变更后不会马上更新DOM，即DOM更新不会阻塞同步代码，而是会在当前执行栈清空以后再执行异步队列中的任务，进行DOM的更新。
vue中$nextTick用于在下一轮DOM渲染更新之后延迟执行回调，如果在修改响应式数据后调用`$nextTick`就可以获取到更新后的DOM.
下面是一个简单示例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="./vue.js"></script>
</head>

<body>
  <div id="app"></div>
  <script>
    const vm = new Vue({
      el: '#app',
      data: {
        msg: 'Vue'
      },
      template: `
        <div>
          <div ref="msgElement">{{msg}}</div>
          <button @click="updateMsg">updateMsg</button>
        </div>
      `,
      methods: {
        updateMsg: function () {
          this.msg = 'Update'
          console.log('更新前:', this.$refs.msgElement.innerHTML)
          this.$nextTick(() => {
            console.log('更新后:', this.$refs.msgElement.innerHTML)
          })
        }
      }
    })
  </script>
</body>

</html>
```




## 异步机制

官方文档中提到，Vue 在更新 DOM 时是**异步**执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。
JS是单线程的，其引入了同步阻塞和异步非阻塞两种执行模式。JS的异步执行模式是由Event Loop执行模型来实现的，它在不同的执行环境中有不同的实现方式。浏览器环境的Event Loop是HTML5规范明确定义的，NodeJS中的Event Loop则是基于libuv实现的。

在浏览器的Event Loop，由执行栈`Execution`，后台线程`Background Threads`，微任务队列`Microtask Queue`以及宏任务队列`Macrotask Queue`组成:

1. 执行栈用于顺序执行同步代码,函数调用会形成由若干帧组成的栈.
2. 后台线程主要用于`setTimeout`/`setInterval`/`XMLHttpRequst`
3. 微任务队列存放一些异步任务的回调,如`Promise``MutationObserver``process.nextTick``Object.observe`
4. 另一些异步任务的回调则进入宏任务队列,主要有`setTimeout``setInterval``setImmediate(Node)``requestAnimationFrame``UI Render``IO`

当JS执行时会重复以下过程:

1. 执行执行栈中的同步代码,将过程的产生的异步任务加入后台线程
2. 当执行栈清空后,会扫描微任务队列,将该队列任务依次出队执行,直到清空微任务队列
3. 检查宏任务队列,出队一个宏任务到执行栈中执行

## 原理

继续分析`$nextTick`的原理.查看以下实例:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <script src="./vue.js"></script>
</head>

<body>
  <div id="app"></div>
  <script>
    const vm = new Vue({
      el: '#app',
      data: {
        msg: 'Vue'
      },
      template: `
        <div>
          <div ref="msgElement">{{msg}}</div>
          <button @click="updateMsg">updateMsg</button>
          <button @click="updateMsgTest">updateMsgTest</button>
        </div>
      `,
      methods: {
        updateMsg: function () {
          this.msg = "Update";
          console.log('修改了数据~')
          setTimeout(() => console.log(1))
          Promise.resolve().then(() => console.log(2))
          this.$nextTick(() => {
            console.log(3)
          })
        },
        updateMsgTest: function () {
          console.log('未修改数据~');
          setTimeout(() => console.log(1))
          Promise.resolve().then(() => console.log(2))
          this.$nextTick(() => {
            console.log(3)
          })
        }
      }
    })
  </script>
</body>

</html>

```

依次点击第一个和第二个按钮后控制台输出结果如下:
发现修改数据后输出结果为`3 2 1`,未修改数据后输出结果为`2 3 1`.
之所以会产生以上的结果是因为当修改数据时,Vue会触发对应依赖的Watcher的`update`方法,而在`update`方法中第一次调用了`nextTick`方法创建了一个异步更新队列`callbacks`,并将`flushSchedulerQueue`回调入队,然后将`callbacks`挂载到Promise上,然后才是将自定义的`Promise.resolve().then(() => console.log(2))`挂载,接着第二次调用`$nextTick`将我们自定义的`console.log(3)`也放入callbacks.
在执行微任务队列时,首先执行第一个微任务,即依次执行`callbacks`中的回调,首先执行第一个回调`flushSchedulerQueue`触发Vue更新DOM,然后执行第二个回调`console.log(3)`,第一个微任务执行完成,接着执行第二个微任务`consolo.log(2)`
而点击第二个按钮时,由于我们没有修改数据,所以直接线先将`console.log(2)`放入微任务队列,然后执行`nextTick`将`console.log(3)`放入微任务队列.
因此问题的本质原因其实`Promise.then()`挂载时机的先后问题.

这里查看一下`v2.7.14`的源码,列出简化的代码:

```javascript

var callbacks = [];
var pending = false;    // 为false时表示是本轮循环第一次调用nextTick
function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
        copies[i]();
    }
}
var p_1 = Promise.resolve();
timerFunc = function () {
    p_1.then(flushCallbacks);
};


function nextTick(cb, ctx) {
    var _resolve;
    // 将回调加入延迟队列
    callbacks.push(function () {
        if (cb) {
            try {
                cb.call(ctx);
            }
            catch (e) {
                handleError(e, ctx, 'nextTick');
            }
        }
        else if (_resolve) {
            _resolve(ctx);
        }
    });
    // 第一次调用nextTick,挂载到promise.then
    if (!pending) {
        pending = true;
        timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {   // 没有传入回调且支持promise则返回一个promsie
        return new Promise(function (resolve) {
            _resolve = resolve;
        });
    }
}
```

明白了原理我们来写一个基于`Promise.then`的`nextTcik`方法:

```javascript
var nextTick = (function () {
  var callbacks = []; // 用于存放延迟回调的数组
  var pending = false;  // 为false表示是本轮循环中第一次调用nextTick,需要将延迟回调挂载到promise.then上.
  var p = Promise.resolve()

  var handler = function () {
    pending = true // 本轮nextTick开始执行,将pending设置为false
    const copies = callbacks.slice()  // 拷贝队列
    callbacks.length = 0  // 清空队列
    copies.forEach(cb => cb())  // 依次执行延迟回调
  }

  var timeFunc = function () {
    p.then(handler)
  }

  return function nextTick(cb) {
    callbacks.push(() => cb())
    if (!pending) {
      pending = true
      timeFunc()
    }
  }
})()

```

```html
<body>
  <script src="./nextTick.js"></script>
  <script>
    (function () {
      // nextTick(() => {   // 取消注释则模拟更改数据时第一次调用nextTick的情况
      //   console.log('触发DOM更新');
      // })
      setTimeout(() => console.log(1))
      Promise.resolve().then(() => console.log(2))
      nextTick(() => {
        console.log(3)
      })
    })()
  </script>
</body>

</html>

```

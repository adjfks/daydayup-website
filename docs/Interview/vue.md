# Vue

## Vue2

### 1. Vue.observable是什么？
这是Vue提供的一个全局API,它用于将传入的对象变成响应式数据。vue组件中的data函数返回的对象就会经过该API的处理。

该API的使用场景是：

在非父子组件通信时，我们可以使用bus或vuex，但是如果是比较简单的通信场景旧可以尝试使用`Vue.observable`，在一个单独的js文件中定义需要共享的数据，并且可以提供公共的修改和设置数据的方法。

在Vue2中，`Vue.observable`底层是使用`Object.defineProperty`进行数据劫持，在`getter`中收集对应的依赖`watcher`，在
`setter`中调用依赖类实例的`notify`方法通知所有的watcher调用对应的`update`更新函数。

### 2. 说说Vue中key的原理？
vue中key使用用来作为元素的唯一标识使用的。主要有两种使用场景：

1是`v-for`列表渲染时作为列表项的位移标识，帮助vue去进行diff算法。

2是在组件上绑定时间戳作为key进行手动强制除法更新渲染。

原理上，当不提供key时，vue默认采用原地更新的策略，即新旧节点依次比对，不一样则重新渲染。

当提供key时，vue会尽可能复用节点，通过新旧虚拟节点前前，后后，后前，前后进行比对，当节点不再一样时，
通过新vnode的key查找旧vnode中是否有对应vnode，如果没有旧新建dom插入，如果有就进一步判断是否sameNode进行patch或新建操作。
将可复用节点移动到新位置。

判断sameNode的函数

```js
function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}
```

### 3. 说说你对vue中keep-alive组件的理解
keep-alive是vue的一个内置组件，当其子组件失活时，会将它的状态缓存在内存中，当再次激活时不会重新进行渲染。

keep-alive有3个props，分别是include/exclude/max，可以用于指定要缓存的组件的匹配规则以及最大的缓存数量。

使用时该组件的子组件中只能有一个被渲染。其子组件可以是动态组件，视图组件(router-view)或多个条件渲染的组件。

底层实现上它会维护一个缓存对象，用组件name作为key，组件实例对象作为值。当组件失活时会判断是否需要缓存，如果需要会再判断是否已经有缓存，没有则将其缓存。在组件激活时则会判断是否命中缓存，命中则直接使用缓存而不必重新渲染。

### 4. vue常见的修饰符有哪些？
分为几类：
1. 表单输入修饰符
2. 事件修饰符
3. 鼠标事件修饰符
4. 键盘事件修饰符
5. `sync`修饰符

表单输入修饰符有：
1. `.trim`用于去掉首尾空格
2. `.number`用`parseFloat`转换为数字，无法转换则返回原址
3. `.lazy`表单事件change时才更新值

事件修饰符
1. `.stop`相当于原生的`event.stopPropagation()`
2. `.prevent`相当于原生的`event.preventDefault()`
3. `.once`支触发第一次
4. `.native`用在组件事件上，绑定到原生的组件根元素上
5. `.passive`禁止使用`event.preventDefault()`，主要用在移动段滚屏事件的优化，防止监听程序阻塞主线程造成滚动卡顿。

鼠标修饰符
`.left`,`.right`,`.middle`分别对应鼠标的左右中键

键盘事件修饰符
`.enter`等`.keyCode`的形式，只有对应键按下才触发处理程序

`.sync`用于实现props的双向绑定，是一种简写的形式。

### 5. 什么是虚拟DOM，如何实现一个虚拟DOM？
虚拟DOM就是用一个js对象去描述真实DOM.它有以下几个优点：
1. 由于他是一个js对象，因此具有跨平台能力
2. 操作js对象比操作DOM性能更好，因此我们可以通过批量修改对象后再批量更新DOM，提高渲染性能。
3. 方便进行新旧虚拟DOM的diff操作。

一个虚拟DOM节点至少包含三个属性：`tag`, `props`, `children`, 虚拟DOM是由这些节点构成的树状结构。

### 6. 在项目中你是怎么封装axios的？
我一般会把一些请求和响应的通用逻辑封装起来。主要有以下几个部分：
1. 请求的接口前缀，根据开发和生产环境，配置axios的请求baseURL。
2. 给请求添加一些通用的请求头和超时时间等。
3. 使用请求拦截器，对一些需要权限的接口添加token等信息。
4. 使用响应拦截器，和后端约定一些响应状态码的含义，对不同的状态码的响应处理后再放行。

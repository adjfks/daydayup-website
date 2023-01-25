# Vue

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



1. vue组件通信方式？

[官方文档事件总线](https://v3.cn.vuejs.org/guide/migration/events-api.html#%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF)

**总述：一共有7、8种方式**

* props
* \$emit / \$on
* \$children / \$parent
* \$attrs / $listeners
* ref
* $root
* eventbus
* vuex

其中在vue3中\$on/\$parent/$listeners这些api已经被废除

事件api的废除使得eventbus实现起来不是很方便，可以通过引入第三方实现了事件触发器接口的库，例如 [mitt](https://github.com/developit/mitt) 或 [tiny-emitter](https://github.com/scottcorgan/tiny-emitter)。

\$children的替代可以使用$refs。

\$listeners废弃后直接通过$attrs就可以访问添加在组件上的事件监听器。

**根据组件关系阐述**

* **父子组件**

* props / emit / $parent / ref / $attrs(爷孙之间透穿属性)

* **兄弟组件**

* $parent / $root / eventbus / vuex

* **跨层级组件**

* vuex / eventbus / provide / inject

### 2. v-if 和 v-for 哪个优先级高？

思路

* 结论
* 为什么，细节
* 场景
* 总结拔高

这个问题在官方文档中其实有[详细描述](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)。

1. 在vue2中，v-for的优先级高于v-if。而vue3中，v-if的优先级高于v-for。
2. 一般有两种情况可能会这样做
* 为了过滤一个列表中的项目，`v-for="user in users" v-if="user.isActive"`，推荐直接使用计算属性做列表过滤。
* 为了避免渲染本应该被隐藏的列表，`v-for="user in users" v-if="shouldShowUsers"`，这种情况应该把`v-if`放到父容器上。
3. 平时在实践中一定要避免v-for和v-if同时出现在一个元素上。

4. 在vue2中，两者放在一起输出的渲染函数是先执行循环，在循环里判段；vue3中是先判断再决定是否循环。
   
```js
// vue3
return function render(_ctx, _cache) {
  with (_ctx) {

    const { createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode } = _Vue
    return (_openBlock(), _createElementBlock(_Fragment, null, [
      _createCommentVNode(" 过滤列表中项目 "),
      _createCommentVNode(" 过滤列表中项目 "),
      _createCommentVNode(" 浏览器控制台会报错：Uncaught TypeError: Cannot read properties of undefined (reading 'isActive') "),
      _createCommentVNode(" <div id=\"app\">\n      <div v-for=\"item in items\" :key=\"item.id\" v-if=\"item.isActive\">\n        {{ item.name }}\n      </div>\n    </div> "),
      _createCommentVNode(" 避免渲染应该被隐藏的列表 "),
      _createElementVNode("div", _hoisted_1, [
        shouldShowUsers
          ? (_openBlock(true), _createElementBlock(_Fragment, { key: 0 }, _renderList(items, (item) => {
              return (_openBlock(), _createElementBlock("div", { key: item.id }, _toDisplayString(item.name), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */))
          : _createCommentVNode("v-if", true)
      ])
    ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))

  }
}
// vue2
(function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('div',{attrs:{"id":"app"}},_l((items),function(item){return (shouldShowUsers)?_c('div',{key:item.id},[_v("\n        "+_s(item.name)+"\n      ")]):_e()}),0)])}
})
```

### 3.[面试官：说说你对vue的理解? ](https://github.com/febobo/web-interview/issues/1)

* vue是什么？
  
  * Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建**单页应用**的Web应用框架。
  
  * Vue所关注的核心是MVC模式中的**视图层**，同时，它也能方便地**获取数据更新**，并通过组件内部特定的方法实现视图与模型的交互

* vue的核心特性：
  
  * 数据驱动MVVM：三层
  
  * 指令系统
    
    * 带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
    
    * 常用的指令
  
  * 组件化
    
    * 把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式
    
    * 降低整个系统的耦合度
    
    * 调试方便
    
    * 提高可维护性

* vue与传统开发区别：
  
  * vue通过操作数据来操作界面事件，不操作DOM
  
  * DOM的变化是数据变化导致的，即DOM与数据绑定。

### 4.[面试官：Vue3.0的设计目标是什么？做了哪些优化?](https://github.com/febobo/web-interview/issues/45)

更小、更快、更友好、优化方案。

* 更小
  
  * `Vue3`移除一些不常用的 `API`
  
  * 引入`tree-shaking`，可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了

* 更快：主要体现在编译方面：
  
  * diff算法优化
  * 静态提升
  * 事件监听缓存
  * SSR优化

* 更友好：composition API
  
  * 很多类似的第三方库，我们只需要调用即可，不必关注实现过程，开发效率大大提高.
  
  * `VUE3`是基于`typescipt`编写的，可以享受到自动的类型定义提示

* 优化方案
  
  * `vue3`从很多层面都做了优化，可以分成三个方面：
    
    * 源码
    * 性能
    * 语法 API
  
  * 源码
    
    * 将不同的模块拆分到`packages` 目录下面不同的子目录中，使得模块拆分更细化，职责划分更明确，模块之间的依赖关系也更加明确，开发人员也更容易阅读、理解和更改所有模块源码，提高代码的可维护性
    
    * 一些 `package`（比如 `reactivity` 响应式库）是可以独立于 `Vue` 使用的
  
  * 性能
    
    * 体积优化
    
    * 编译优化
    
    * 数据劫持优化

### 5. Vue特点

1. 两个核心功能
* 声明式渲染：通过模板语法声明式地描述基于js状态的HTML解构

* 响应式：Vue会自动追踪数据变化，响应式地更新DOM视图。
2. 渐进式的Web开发框架
* 灵活性和可逐步集成，可以以多种方式使用。

* 作为独立脚本

* 嵌入web component，特点就是适应性非常强，因为web component是原生标准，所以可以嵌入到任何页面甚至其他框架。

* 有一套构建SPA的生态系统，包括路由如vue-router,构建工具vue-cli，开发者调试工具，还支持typescript集成
3. 使用单文件组件（SFC），里面可以书写js，css和html

4. vue3还推出了composition api，之所以叫做组合式api一个原因是因为它可以很方便地抽离重复逻辑到单独文件中，并且在这个文件中又可以引入其他的单文件工具，可以组合起来。像Vueuse就封装了100多个使用的逻辑。

### 6. vue生命周期钩子

1. 每个Vue组件实例被创建后都会经过⼀系列初始化步骤，⽐如，它需要数据观测，模板编译，挂载实例到dom上，以及数据变化时更新 dom。这个过程中会运⾏叫做⽣命周期钩⼦的函数，以便⽤户在特定阶段有机会添加他们⾃⼰的代码。

2. Vue ⽣命周期总共可以分为8个阶段：**创建**前后, **挂载**前后, **更新**前后, **销毁**前后，以及⼀些特殊场景的⽣命周期。

3. setup 执行时机位于 beforeCreate 和 created 之间。

**结合实践：**

* beforeCreate：通常⽤于插件开发中执⾏⼀些初始化任务
* created：组件初始化完毕，可以访问各种数据，获取接⼝数据等
* mounted：dom已创建，可⽤于获取访问数据和dom元素；访问⼦组件等
* beforeUpdate：此时 view 层还未更新，可⽤于获取更新前各种状态
* updated：完成 view 层的更新，更新后，所有状态已是最新
* beforeunmounted：实例被销毁前调⽤，可⽤于⼀些定时器或订阅的取消
* unmounted：销毁⼀个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器

### 7.  哪个生命周期开始可以访问到data

created开始

### 8. Vue3相比于Vue2有哪些优点？

[参考](https://segmentfault.com/a/1190000040695447)

1. diff算法优化：Vue2中虚拟DOM是全量对比，无论节点是动态的还是静态的都会一层一层比较。Vue3中新增了静态标记`patchFlag`，用于标记动态数据所在的节点，在与上次虚拟DOM比对时只对比带有`patchFlag`标记的节点。`patchFlag`是一个枚举，取值1代表文本是动态绑定的，取值为2代表元素的class是动态绑定的。

2. hoistStatic静态提升：在Vue2中无论元素是否参与更新都会被重新渲染，而Vue3中会将不参与更新的元素提升到reder函数的外面。

3. 组合式API：将紧密联系的逻辑放在一起，有利于更好的代码维护，还可以方便地将逻辑抽离封装成单独的js或ts文件，比如VueUse库就封装了很多开箱即用的功能。

4. 支持按需编译，体积比Vue2更小。

### 9. history路由是如何实现的（底层实现），与hash路由的区别，以及各自的优缺点。

hash优点:

(1)只需要前端配置路由表, 不需要后端的参与(2) 兼容性好, 浏览器都能支持(3) hash值改变不会向后端发送请求, 完全属于前端路由

hash缺点：

存在一个#，url不美观

history模式

优点: (1) 符合url地址规范, 不需要#, 使用起来比较美观 缺点: (1) 在用户手动输入地址或刷新页面时会发起url请求, 后端需要配置index.html页面来处理用户匹配不到静态资源的情况, 否则会出现404错误 (2) 兼容性比较差, 是利用了 HTML5 History对象中新增的 pushState() 和 replaceState() 方法,需要特定浏览器的支持.

### 10. v-model指令的双向数据绑定是如何实现的？

1. v-model指令经常用在表单元素这种用户交互需要改变变量的情况。

2. 因为v-model是双向的数据绑定，那么如果不使用v-model的话，需要有两个步骤完成绑定，首先把变量使用v-bind绑定到对应的属性上，然后添加对应事件的处理程序。

3. v-model简化了上面的步骤，直接使用`v-model="xxx"`的形式就搞定了。

4. v-model在模板编译阶段还是会被编译成对应的属性和事件绑定，如input/textarea的value属性和input事件，checkbox和redio的checked属性和change事件。

5. 对于checkbox还有vue中特有的true-value和false-value属性。input.setAttribute('value', text)

### 11. Object.defineProperty()和new Proxy()实现双向数据绑定的区别以及优缺点。

1. Object.defineProperty是劫持对象的某个属性，而proxy则是对整个对象的代理。

2. 新增属性的时候需要使用Object.defineProperty进行重新劫持，而proxy不需要。

3. Object.defineProperty只能监听单一属性的修改和变化，不能监听对象属性的新增和删除，Vue2使用$set解决，而proxy可以轻松实现。

4. Object.defineProperty不能监听数组的变化，Vue2是通过重写数组相关方法和添加钩子实现。Proxy则可以监听数组的变化。

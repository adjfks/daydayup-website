# HTML

## 👀基础

### 1.script, script async 和 script defer之间的区别？

* `defer`使得browsers延迟脚本的执行，直到文档的载入和解析完成并可以操 作（在onload事件触发前），加上 defer 等于在页面完全在入后再执行，相 当于 window.onload ，但应用上比 window.onload 更灵活！
* `async` 属性规定一旦脚本可用，则会异步执行。所以async使得browsers可以尽快地执行脚本，而 不用在下载脚本时阻塞文档解析（异步）。在不支持async的browsers中，通过动态创 建script元素并把它插入文档中，来实现脚本的异步载入和执行。 **若两个属性同在，会忽略defer而遵从async。**

### 2.为什么css样式的位置一般在head中而js的样式则是在body中？那有没有其他例外情况？

* 因为这和需要的加载顺序有关，CSS放在头部会先被加载，因为css样式表规定了网页总体 样式，而js一般是在其他内容加载完成之后起作用的，所以一般加载在尾部。

* head 内的 JavaScript 需要执行结束才开始渲染 body，如果有多个外连接脚本放在head中，那 么，当加载脚本时会阻塞页面的渲染，也就是常说的空白。而 CSS 应当写在 head 中，以 避免页面元素由于样式缺失造成瞬间的白页或者给用户闪烁感。 例外是：
1. 个别特殊JS，比如用于调试的基础脚本（部署时未必有）、性能日志之类，必须放在尽量最前的位置。
2. 一些需要在body之前加载的js文件，`html5-shim`脚本必须在body之前加载。
3. 渐进式渲染中也需 要先加载js。

### 3. html5中有哪些新的标签?

首先HTML5的特点是更加简洁以及更加语义化，html5中新 增的标签有如：`nav，header，footer，artical，section，aside，canvas， details，mark，audio，video。`

### 4.iframe有那些优缺点？

只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改。

缺点：阻塞页面onload事件

搜索引擎无法检索这种页面，不利于SEO

会影响页面的并行加载

解决方案：使用JS动态给iframe的src加载页面内容

### 5.:before和::before区别?

单冒号(:)是css2的写法

双冒号(::)用于CSS3。作用是一样的。

加分项：

配合`content`一起使用，不会出现在DOM中，所以不能JS控制，仅仅用于css渲染，通常用于 hover激活

### 6. html语义化

[html和可访问性]([HTML: 为可访问性提供一个良好的基础 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/HTML#html_%E5%92%8C%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7))

1. html语义化就是使用正确的标签来表达正确的意图，这样做可以提升网页的可访问性。

2. 正确的语义化可以**使CSS和JS更为便利地操作网页的样式和行为**，更便于获得一些功能。例如一个视频播放按钮，我们既可以使用div也可以使用button，但是使用button不仅提供了button的样式（虽然我们经常会重写该样式），也提高了键盘对该网页的可访问性，例如使用tab键切换按钮，Enter键点击按钮。

3. 诸如按钮、表单控件、链接，浏览器提供了键盘控制的方式。不过一些默认不能用键盘激活的元素可以添加`tabIndex`属性来使其可以激活，详见[ html建立键盘可访问性]([Log In · Yuque](https://www.yuque.com/pencilx-ohbhv/up15gz/erkl21/edit))。

4. 有利于SEO优化，如搜索引擎会更注重标题和链接中的关键字。

5. 使用HTML5的语义化标签，如`header/nav/main/article/main/aside/footer`

6. 便于屏幕阅读器阅读。

7. 文本的语义化，如超链接的文本内容应该描述链接内容而不是像`点我`这类词语，表单的文本可以使用label标签结合for属性使用。

### 7. `<meta name="viewport">`标签的作用

    <meta name="viewport" content="width=device-width,initial-scale=1.0">

上面这段HTML代码主要是针对移动端的，因为移动端html网页的默认宽度是980px并不等于设备宽度，因此通过该标签将视口宽度设置为与设备同宽，制作适配不同宽度设备的网页。

### 8. 移动端click事件有什么问题？

移动端click事件有300ms延时，原因是移动端可以双击进行网页缩放。解决方式就是给HTML添加一个meta标签禁用缩放

    <meta name="viewport" content="user-scalable=no">

### 9. H5新特性

1. 语义化标签
2. 多媒体支持
3. Canvas和SVG
4. 本地存储localStorage和sessionStorage API
5. Web Worker 和 WebSocket

追问：localstorage的api,原理

1. `setItem, getItem, removeItem, clear`
2. 大多数浏览器的localStorage基于SQLite数据库实现，会为每个域名下的localStorage创建一个数据库文件。
3. 浏览器开启隐私模式可能会禁用localStorage.

能跨域吗？怎么跨域共享？

1. 不能跨域。
2. 利用iframe。

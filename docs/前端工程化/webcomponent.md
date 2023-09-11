# Web Component

Web Components 旨在解决这些问题 — 它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

- **Custom element（自定义元素）**：一组 JavaScript API，允许您定义 custom elements 及其行为。
- **Shadow DOM（影子 DOM）**：一组 JavaScript API，用于将封装的“影子”DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。
- **HTML template（HTML 模板）：** [<template>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template) 和 [<slot>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot) 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。

# 实践

一个自定义元素主要有几个特性：

1. 样式隔离
2. 可以读取传入的属性
3. 具有特定的生命周期回调函数

创建一个Web Component:

```typescript
class Wujie extends HTMLElement {
  constructor() {
    super()
    // 创建一个shadowDom 实现样式隔离
    let shadowDom = this.attachShadow({ mode: 'open' })
    // 给shadowDom的根节点添加内容
    const template = document.querySelector(
      '#wujie-template'
    ) as HTMLTemplateElement
    shadowDom.appendChild(template.content.cloneNode(true))

    // 获取属性
    let name = this.getAttr('name')
    console.log('name: ', name)
    let age = this.getAttr('age')
    console.log('age: ', age)
  }

  getAttr(attr: string) {
    return this.getAttribute(attr)
  }

  // 当 custom element 首次被插入文档 DOM 时，被调用。
  connectedCallback() {
    console.log('connectedCallback...')
  }

  // 当 custom element 从文档 DOM 中删除时，被调用。
  disconnectedCallback() {
    console.log('disconnectedCallback...')
  }

  // 当 custom element 增加、删除、修改自身属性时，被调用。
  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    console.log('attributeChangedCallback...')
  }

  // 当 custom element 被移动到新的文档时，被调用。
  adoptedCallback() {
    console.log('adoptedCallback...')
  }
}

window.onload = () => {
  window.customElements.define('wu-jie', Wujie)
}
```

html:

```html
<wu-jie name="Joke" age="14"></wu-jie>
  <div>我是外层div</div>

  <template id="wujie-template">
    <style>
      div {
        background-color: skyblue;
      }

    </style>
    <div>我是webcomponent中的div</div>
  </template>
  <script src="./index.js"></script>
```



# 无界

微前端框架就是用到了Web Component和qiankun沙箱，且使用引入简单。



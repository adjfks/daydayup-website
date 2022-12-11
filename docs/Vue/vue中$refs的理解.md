`$refs`用来在Vue中获取绑定了`ref`属性的DOM引用或子组件实例对象,通过它我们可以直接访问DOM和子组件实例.
不过也正是`$refs`的引入,使得Vue并没有完全遵循MVVM架构的设计,因为MVVM严格要求View层和Model层不能直接进行通信,而是必须通过ViewModel作为中介.

## 使用
`ref`属性可以绑定在3种情况的模板中:

1. 普通的DOM元素,将获取原生DOM元素的引用
2. 子组件上,将获取子组件的实例对象
3. 和`v-for`指令绑定在同一元素或子组件上,将获得一个包含相应元素或子组件实例的数组.

下面是一个使用的简单示例:
```html
<div id="app"></div>
<script src="../vue.js"></script>
<script>
const Comp = Vue.component('Comp', {
  name: 'Comp',
  data: function () {
    return {
      count: 1
    }
  },
  template: `
    <div>
      <p>{{ count }}</p>  
    </div>
  `
})
const vm = new Vue({
  el: '#app',
  data: {
    name: 'Joke',
    age: 18,
    citys: [
      'BeiJin',
      'ShenZhen',
      'ShangHai'
    ]
  },
  template: `
    <div>
      <div ref="div">普通DOM元素div</div>
      <Comp ref="comp"/>
      <ul>
        <li v-for="city in citys" id="city" ref="liArr">{{ city }}</li>
      </ul>
    </div>
  `,
  mounted: function () {
    console.log('div', this.$refs.div);
    console.log('comp', this.$refs.comp);
    console.log('liArr', this.$refs.liArr);
  }
})
```
因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。
在初始化访问ref时，应该在其生命周期的mounted方法中调用，在数据更新之后，应该在$nextTick方法中传递回调操作来获取元素或实例，此外一般不推荐直接操作DOM元素，尽量使用数据绑定让MVVM的ViewModel去操作DOM。

```html
<div id="app"></div>
<script src="../vue.js"></script>
<script>
const Comp = Vue.component('Comp', {
  name: 'Comp',
  data: function () {
    return {
      count: 1
    }
  },
  template: `
    <div>
      <p ref="count">count: {{ count }}</p>
      <button @click="increase">+1</button>
    </div>
  `,
  methods: {
    increase: function () {
      this.count += 1
      console.log('count: ', this.$refs.count.innerHTML);
      this.$nextTick(() => {
        console.log('count in nextTick: ', this.$refs.count.innerHTML);
      })
    }
  }
})
const vm = new Vue({
  el: '#app',
  data: {
    name: 'Joke',
    age: 18,
    citys: [
      'BeiJin',
      'ShenZhen',
      'ShangHai'
    ]
  },
  template: `
    <div>
      <div ref="div">普通DOM元素div</div>
      <Comp ref="comp"/>
      <ul>
        <li v-for="city in citys" id="city" ref="liArr">{{ city }}</li>
      </ul>
    </div>
  `,
  beforeMount: function () {
    console.log('div', this.$refs.div);
  },
  mounted: function () {
    console.log('div', this.$refs.div);
    console.log('comp', this.$refs.comp);
    console.log('liArr', this.$refs.liArr);
  }
})
```

# Vue中的双向数据绑定



vue是用过数据劫持的方式来进行数据的双向绑定的.它的核心是利用ES5的`Object.defineProperty`定义对象属性描述符中的`getter`和`setter`,从而能够在数据访问和更新时追踪依赖.

## 分析

vue的双向数据绑定,简单来说分为3个部分:

1. Observer: 对数据对象中的每一个属性进行数据劫持,在`setter`中收集依赖, 在`getter`中触发对应`Watcher`的更新函数.
2. Watcher: 观察者, 为数据提供修改时的更新函数.
3. Dep: 链接Observer和Watcher, 内部维护了一个数组用于收集依赖.

## 简单实现

下面提供一个vue数据双向绑定简单实现的demo,实际vue中DOM的更新是异步且做了大量的优化.

1. 实现Dep

`Dep`中主要维护一个用于收集依赖的数组`subscribers`和用于添加依赖的方法`addSub`以及用于通知所有依赖更新的`notifyAll`方法.

```javascript
function Dep() {
  // 收集订阅者（依赖）的数组
  this.subscribers = []
  // 添加依赖的方法
  this.addSub = function (sub) {
    if (sub && this.subscribers.findIndex(item => item === sub) === -1) {
      this.subscribers.push(sub)
    }
  }
  // 通知所有依赖更新的方法
  this.notifyAll = function () {
    for (var i = 0; i < this.subscribers.length; i++) {
      this.subscribers[i].update()
    }
  }
}
```

2. 实现Observer

Observer通过`Object.defineProperty()`为数据对象的每一个属性定义`getter`和`setter`.
在`getter`中会创建`Dep`实例用于收集当前属性的实例. 当判断`Dep.target`存在时,就把`Dep.target`加入到当前属性的依赖中.
在`setter`中会调用`Dep`实例的`notifyAll`方法通知所有依赖更新

```javascript
function observe(obj) {
  for (let key in obj) {
    // 每一个属性对应一个Dep实例
    let dep = new Dep()
    let value = obj[key]
    if (Object.prototype.toString.call(value) === '[object Object]') {
      observe(value)
    }
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get: function () {
        if (Dep.target) {
          // 添加依赖
          dep.addSub(Dep.target)
        }
        return value
      },
      set: function (newVal) {
        if (newVal === value) return value
        value = newVal
        dep.notifyAll()
      }
    })
  }
  return obj
}
```

3. 实现Watcher

Watcher实例化时接收一个回调函数,用于在初始化和数据更新时被调用.回调函数中访问data中的值,就会被对应对象属性的Dep实例收集.

```javascript
function Watcher(fn) {
  // 更新函数
  this.update = function () {
    fn()
  }
  // 初始化watcher时要给相应数据添加依赖
  Dep.target = this
  // 调用回调函数,函数中访问data,从而触发依赖收集
  fn()
  Dep.target = null
}
```

## 完整版demo

除了以上3个方法之外,demo中还定义了`proxy`方法用于将data中的数据代理到vm实例上,从而可以直接通过`vm.xxx`访问数据.
还定义了一个`render`函数,用于对传入的`template`进行处理后渲染,相当于一个简易的模板引擎
在浏览器打开以下网页,然后在控制台通过`vm.xxx`改变数据,可以看到DOM会自动更新.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="app"></div>
  <script src="../vue.js"></script>
  <script>
    const vm = new Mvvm({
      el: '#app',
      data: {
        name: 'Corner',
        age: 22
      },
      template: `
        <div>
          <div>name: {{ name }}</div>
          <div>age: {{ age }}</div>
        </div>
      `
    })

    function Mvvm(config) {
      this.$el = config.el
      this.$root = document.querySelector(config.el)
      this.$data = observe(config.data)
      // 用于将data中的属性代理到this实例上,使得可以通过this.xxx的方式访问数据
      proxy.call(this, this.$data)
      this.$template = config.template
      new Watcher(() => {
        console.log(this.name, this.age);
        render.call(this)
      })

      function Dep() {
        // 收集订阅者（依赖）的数组
        this.subscribers = []
        // 添加依赖的方法
        this.addSub = function (sub) {
          if (sub && this.subscribers.findIndex(item => item === sub) === -1) {
            this.subscribers.push(sub)
          }
        }
        // 通知所有依赖更新的方法
        this.notifyAll = function () {
          for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update()
          }
        }
      }

      function observe(obj) {
        for (let key in obj) {
          // 每一个属性对应一个Dep实例
          let dep = new Dep()
          let value = obj[key]
          if (Object.prototype.toString.call(value) === '[object Object]') {
            observe(value)
          }
          Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            get: function () {
              if (Dep.target) {
                // 添加依赖
                dep.addSub(Dep.target)
              }
              return value
            },
            set: function (newVal) {
              if (newVal === value) return value
              value = newVal
              dep.notifyAll()
            }
          })
        }
        return obj
      }

      function Watcher(fn) {
        // 更新函数
        this.update = function () {
          fn()
        }
        // 初始化watcher时要给相应数据添加依赖
        Dep.target = this
        fn()
        Dep.target = null
      }

      function proxy(data) {
        for (let key in data) {
          Object.defineProperty(this, key, {
            configurable: true,
            enumerable: true,
            get: function () {
              return this.$data[key]
            },
            set: function (newVal) {
              this.$data[key] = newVal
            }
          })
        }
      }

      // 处理template并进行渲染
      function render() {
        var html = this.$template
          .replace(/"/g, '\\"')
          .replace(/\s+|\r|\t|\n/g, ' ')
          .replace(/\{\{.*?\}\}/g, function (value) {
            return value.replace('{{', '"+(').replace('}}', ')+"')
          })
        html = `var targetHtml = "${html}";return targetHtml;`
        // 语法：new Function(...args, functionBody)
        var parsedHtml = new Function(...Object.keys(this.$data), html)(...Object.values(this.$data))
        this.$root.innerHTML = parsedHtml
      }
    }
  </script>
</body>

</html>

```

# vue中watch的理解



[本节代码](https://github.com/adjfks/Mini-Code/tree/main/code/vue-source/6-watch)
watch是一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个 property。

## 使用

vue中的watch主要是用来侦听响应式数据的变化，并且在数据变化时执行异步或开销较大的操作。
watch的键可以是普通的变量，也可以是字符串，字符串可以是对象属性访问表达式，例如：`'e.f'`
值可以是一个函数，一个方法名的字符串，一个包含handler的对象，一个数组
注意：不应该使用箭头函数来定义watcher函数，因为箭头函数的this指向父级作用域而不是Vue实例.computed同理，但是computed可以通过处理函数的第一个参数来访问vm实例

```javascript
var vm = new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: {
      f: {
        g: 5
      }
    }
  },
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: 'someMethod',
      immediate: true
    },
    // 你可以传入回调数组，它们会被逐一调用
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
})
vm.a = 2 // => new: 2, old: 1
```

下面是我写的一个demo

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <div>name: {{ name }}</div>
    <div>age: {{ age }}</div>
    <div>height: {{ height }}</div>
    <button @click="ageInc">age+1</button>
  </div>
  <script src="../vue.js"></script>
  <script>
    const vm = new Vue({
      el: '#app',
      data: {
        name: 'Corner',
        age: 15,
        height: 170
      },
      watch: {
        age(newVal, oldVal) {
          console.log('oldVal: ', oldVal);
          console.log('newVal: ', newVal);
          this.height += this.age;
        }
      },
      methods: {
        ageInc() {
          this.age++;
        }
      }
    })
  </script>
</body>
</html>
```

## 分析

watch是通过调用`initWatch`进行初始化的

```javascript
if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
}
```

`initWatch`中遍历watch对象的每一项，然后对每一项调用`createWatcher`，如果其中某一项是数组，那么就遍历数组的每一项传入`createWatcher`

```javascript
function initWatch(vm, watch) {
    for (var key in watch) {
        var handler = watch[key];
        if (isArray(handler)) {
            for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
            }
        }
        else {
            createWatcher(vm, key, handler);
        }
    }
}
```

`createWatcher`中只是对watch的handler进行了处理，然后调用了`vm.$watch`

```javascript
function createWatcher(vm, expOrFn, handler, options) {
    if (isPlainObject(handler)) {
        options = handler;
        handler = handler.handler;
    }
    if (typeof handler === 'string') {
        handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options);
}
```

`vm.$watch`的核心就是对传入的监听对象实例化一个watcher，并且将对应的handler作为更新函数。

```javascript
Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
        var info = "callback for immediate watcher \"".concat(watcher.expression, "\"");
        pushTarget();
        invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
        popTarget();
    }
    return function unwatchFn() {
        watcher.teardown();
    };
};
```

Watcher中与`watch`相关逻辑：

```javascript
var Watcher = (function () {
  function Watcher (vm, expOrFn, cb) {
    this.cb = cb;
    // expOrFn 即 expression or function
    if (isFunction(expOrFn)) {
        this.getter = expOrFn;
    }
    else {
      // parsePath用于解析对象属性访问表达式，返回一个函数，函数接收一个对象，然后通过exp访问值
        this.getter = parsePath(expOrFn);
    }
    this.value = this.get()
  }

  Watcher.prototype.get = function () {
    // 将当前watcher放入栈顶，供依赖收集使用
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      // 访问一下，触发依赖收集，对于watch
        value = this.getter.call(vm, vm);
    }
    catch (e) {
        if (this.user) {
            handleError(e, vm, "getter for watcher \"".concat(this.expression, "\""));
        }
        else {
            throw e;
        }
    }
    finally {
        // "touch" every property so they are all tracked as
        // dependencies for deep watching
        if (this.deep) {
            traverse(value);
        }
        popTarget();
        this.cleanupDeps();
    }
    return value;
  }
})()
```

`parsePath`：

```javascript
function parsePath(path) {
  if (bailRE.test(path)) {
      return;
  }
  var segments = path.split('.');
  return function (obj) {
      for (var i = 0; i < segments.length; i++) {
          if (!obj)
              return;
          obj = obj[segments[i]];
      }
      return obj;
  };
}
```

## 核心

其实`watch`的底层原理就是为`watch`对象中的每一个键所对应的响应式数据实例化了一个watcher，这个watcher的更新函数会调用我们定义的`handler`，只要键所对应的数据发生变化，就会触发handler的调用。
在实例化`watcher`的过程中会访问键对应的响应式数据，触发该数据的依赖收集。当该数据变化时，会调用其收集的所有`watcher`的更新函数。
手写`watch`的核心逻辑（简易）：

```javascript
function initWatch(vm, watch) {
  for (let key in watch) {
    createWatcher(vm, key, watch[key])
  }
}

function createWatcher(vm, key, handler) {
  new Watcher(vm, key, handler)
}

function Watcher(vm, expOrFn, cb) {
  this.cb = cb
  this.getter = function () {
    return vm[expOrFn]
  }
  // 访问响应式数据，触发该数据的dep收集当前这个watcher
  // 实际vue中用了一个栈来进行Dep.target的赋值
  Dep.target = this
  this.value = this.getter()
  Dep.target = null

  this.update = cb
}
```

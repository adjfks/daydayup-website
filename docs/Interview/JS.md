# JS

## 👀基础

### 1.js单线程,为什么？

js单线程，原因避免dom渲染冲突

### 2.js数据类型？

1. 分为两类：
   
   * 7种简单数据类型：Number、String、 Boolean、 null 、undefined 、BigInt 、Symbol
   
   * 1种复杂数据类型：Object

2. 本质区别：存储方式不同
   
   * 简单数据类型存储在栈中
   
   * 引用数据类型存储在堆中，栈中存放的是它在堆中的指针。

3. es6新数据类型：
   
   * Symbol的特点是它的值是唯一的，可以作为对象的属性标识符。如`obj[Symbol('a')] = 'a'`。Symbol属性不能使用for in 和`Object.getOwnPropertyNames()`得到。需要使用`Object.getOwnPropertySymbols`。
   
   * BigInt是一个内置对象，可以用来表示任意大的整数。定义时可以直接在一个整数后面加上'n'，或者调用`BigInt('12348329483029432')`传入一个整数值或字符串值来创建。字符串值必须是一个数字的字符串，含有字母会报错。不能和Number类型一起运算，否则会报错。

### 3.创建对象的几种方式？

    var o1 = {name:'abcd01'};
    var o2 = new Object({name:'abcdo2'});
    function M(name) {
        this.name=name;
    }
    var o3 = new M('abcdo3');
    var p={name:'abcdp'};
    var o4 = Object.create(p);
    // ps:o4创建了一个原型，o4.__proto__===p

### 4.new操作符具体干了什么呢?

1. 创建一个空的简单 JavaScript 对象（即`{}`）；
2. 为步骤 1 新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象 ；
3. 将步骤 1 新创建的对象作为`this`的上下文 ；
4. 如果该函数没有返回对象，则返回`this`。

`new.target`属性允许你检测函数或构造方法是否是通过new运算符被调用的。在通过new运算符被初始化的函数或构造方法中，`new.target`返回一个指向构造方法或函数的引用。在普通的函数调用中，`new.target` 的值是`undefined`

### 5.DOM事件类

捕获、冒泡和自定义事件。

当一个事件触发时是先从上到下触发对应的事件监听器，再冒泡去触发对应的事件监听器。

* 捕获（上到下）顺序 `window=>document=>html(document.documentElement获得html标签)>body>...`
  
    dom.addEventListener('click',function () { //dom为上一行捕获的对象
  
        console.log(123);//上一行每一个对象所捕获
  
    },true); //为true才可以捕获

* 冒泡（下到上）和上面相反
  
  * Event对象常见应用：
    
    event.preventDefault();
    
    event.stopPropagation();
    
    event.stopImmediatePropagation() ; //一个对象有多个事件，添加这句话，其他的不会在执行
    
    event.currentTarget； //当前事件处理程序所在的元素
    
    event.target

* 自定义事件
  
    //var eve = new Event('custome');
  
        //var eve = new Event('custome');
        var eve = new CustomEvent('custome', {
            detail: {
                username: "davidwalsh"
            }
            });//可以增加参数
        dom.addEventListener('custome',function (e) {
            console.log(e.detail)
        });
            dom.dispatchEvent(eve);//触发自定义事件

### 6. for in 与 for of 的区别

**for in**

* 首先，for in 就是用来遍历对象属性用的，遍历数组等最好不要使用，它的效率比较低

* for in 遍历对象属性是会进行原型链搜索，因此继承的属性也会被遍历到，如果不想遍历继承的属性和方法可以使用 `hasOwnProperty()`方法判断该属性是否该对象的实例属性。

* for in 执行过程
  
  * 判断in后的表达式结果
    
    * undefined或null则报错或跳过
    * 数字、字符串或布尔值转换为包装对象
  
  * 运行in前面的表达式，从后面的对象取属性赋值给该结果（左值）
  
  * 执行循环体
  
  * 重复前面2个步骤
    
        // 利用这个特性，可以将对象属性拷贝到数组
        let obj = {
          name: 'zs',
          age: 20
        }
        let a = []
        let i = 0
        for (a[i++] in obj);
        console.log(a)
        // [ 'name', 'age' ]

* for in 遍历数组得到的是数组各项的索引，是字符串类型的

**for of**

* 这是ES6新增的，它遍历数组内的元素，不包括原型和索引
* 可以遍历数/数组对象/字符串/map/set等拥有迭代器对象（iterator）的集合，但是**不能遍历对象，因为对象不含迭代器对象。**

**总结**

| 类型  | for in    | for of          |
| --- | --------- | --------------- |
| 数组  | 索引（字符串类型） | 值               |
| 字符串 | 索引（字符串类型） | 值               |
| 对象  | 属性（字符串类型） | 报错              |
| 数字  | 不报错但拿不到值  | 报错              |
| Set | 不报错但拿不到值  | 值               |
| Map | 不报错但拿不到值  | 各项['key','val'] |

* for of 不能遍历对象和数字，其他都能拿到值，其中Map拿到的是数组

* for in 都可以遍历，但只有数组、字符串和对象能拿到属性（索引）

### 7. 说一说promise是什么与使用方法？

1. **Promise的作用**：Promise是异步微任务，解决了异步多层嵌套回调的问题，让代码的可读性更高，更容易维护。

2. **Promise创建**：Promise是ES6提供的一个构造函数，可以使用Promise构造函数new一个实例，Promise构造函数接收一个函数作为参数，这个函数有两个参数，分别是两个函数 `resolve`和`reject`，`resolve`将Promise的状态由`pending`变为`resolved`（也叫`Fulfilled`），将异步操作的结果作为参数传递过去；`reject`则将状态由`pending`转变为`rejected`，在异步操作失败时调用，将异步操作报出的错误作为参数传递过去。

3. **链式调用**：实例创建完成后，可以使用`then`方法分别指定成功或失败的回调函数，也可以使用catch捕获失败，then和catch最终返回的也是一个Promise，所以可以链式调用。

4. **Promise特点**：
   
   1. 状态只能由pending变为fulfilled或从pending变为rejected，状态一旦发生变化就不可逆。
   
   2. then方法和catch只要不报错，返回的都是一个fulfilled的Promise
   
   3. Promise各种方法（今晚看一下红宝书）

5. Promise.resolve

是一个幂等的方法，传入的如果是promise，则保留它的原始状态；传入的是其他非promise值如错误对象，则将其变为fulfilled

6. promise.reject

不是幂等的，传入一个promise，会返回一个rejected的promise，并且rejected的原因就是传入的Pormise。

用于实例化一个拒绝的pormise并抛出一个不能被try/catch捕获的错误，只能使用reject处理程序捕获。因为try/catch是同步执行的，而promise.reject中抛出的错误由浏览器的一步消息队列处理，所以不能捕获到。只能使用promise的方法来捕获。

7. promise.then

接收两个函数作为参数，第一个函数onResolved中使用Promise.resolve包装上一个promise返回的值，如果没有返回值就包装undefined返回。

第二个函数参数onRejected用于捕获reject()，它的返回值也使用Promise.resolve包装，因为它的任务就是捕获reject错误，捕获到了就应该成功。

8. Promise.prototype.catch

是Promise.then(null , onRejected)的语法糖

9. Promise.finally()

记住这是一个**状态无关**的方法，无论调用该方法的promise是resolve还是reject都会执行传入finally的回调函数，因此可以用来执行一些公共的操作。它也返回一个promise，当回调函数里没有返回promise或没有返回pending或rejected的promise时，就把调用它的promise往后传。

pending的Promise解决以后仍然是把父promise往后传。

10. Promise.all和Promise.race

将多个promise组合成一个。

promise.all必须等所有promise状态确定才会确定，都确定之后，必须全为resolve才为resolve，有一个reject就reject

promise.reject返回包装第一个解决的promise，状态由该promise决定。

11. 配合数组的reduce方法可以进行promise的串行合成。**`new.target`**属性允许你检测函数或构造方法是否是通过[new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)运算符被调用的。在通过[new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)运算符被初始化的函数或构造方法中，`new.target`返回一个指向构造方法或函数的引用。在普通的函数调用中，`new.target` 的值是[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

### async / await

js运行时遇到await时会暂停执行该任务，并记录在哪里暂停执行，等到await右边的值可用后，向消息队列中一个推送一个异步任务，这个任务会恢复异步函数的执行。await之后的函数其余部分也会被异步执行。

async就是一个异步的标识符，必须配合await才能达到异步效果，真正起作用的是await

### async有什么用？

1. 用于修饰一个函数，使得函数始终返回一个promise

2. 使得可以在函数中使用await。

### 8. 函数的name属性可以修改吗？

函数的name属性返回函数实例的名称。

使用`new Function(...)`语法创建的函数的name属性为`"anonymous"`

`Function.bind()`所创建的函数将会在函数的名称前加上"bound " 。

    function foo() {};
    foo.bind({}).name; // "bound foo"

### 9. 结果？

    var foo = function () {
        console.log(2)
    }
    function foo() {
        console.log(1)
    }
    
    foo()

无论两个声明的的顺序如何，结果都是2，`var`赋值是在运行阶段，`function`声明是在解析阶段，运行阶段foo会被赋值为打印2的函数

    function foo() {
        console.log(1)
    }
    var foo = 2
    foo()

这一段会报错，foo不是函数。

### 10. 变量提升

1. js会把变量声明部分和函数声明部分提升到函数作用域或全局作用域顶端，变量会有一个初始值undefined。

2. **编译阶段**，同名的函数会选择最后声明的那个，如果变量和函数同名，变量声明会被忽略，但是执行阶段，变量赋值照常进行。

### 11. js作用域

1. 全局作用域

2. 函数作用域

3. 块级作用域：在一个上下文中，let / const 声明的变量会被放在词法环境中，其内部维护了一个最小栈结构，进入一个作用域块就将该作用域块的变量压入栈顶，执行完后就弹出。而其他的var声明的变量则存放在变量环境中。查找变量时会沿词法环境栈顶向下查找，如果找到就返回，找不到就到变量环境中找。

### 12. 词法环境

词法环境

* 环境记录
  
  * 声明式环境记录
    
    * 函数环境记录
    
    * 模块环境记录（let const）
  
  * 对象式环境记录（var）

* 对外部词法环境的引用

### 13. Symbol

1. What?es6新增的原始数据类型，具有唯一性和不可变性。

2. Why?主要作用是作为属性的唯一标识符，防止对象属性发生冲突。

3. How?
* 使用`Symbol()`创建，可以传入字符串，但是每一个symbol都和传入的字符串无关，都是唯一的，用相同字符串创建的Symbol也是不一样的。

* 不能和new一起使用，是为了避免创造出包装对象。

* 重用Symbol的唯一方式是使用`Symbol.for(字符串)`来在全局注册表中注册，访问时也是用`Symbol.for(字符串)`，系统会检查全局注册表中是否注册过该`Symbol`，如果注册过就使用，没有就注册一个。传入参数都会被转换为字符串。

* `Symbol.keyFor(全局注册的Symbol)`用于查询一个全局注册Symbol对应的字符串，找不到返回undefined

* 用作对象字面量属性时加上一个`[]`。

* es6内置了一批符号，比如`Symbol.iterator`，在规范里经常带上前缀`@@iterator`

### 14. 判断数据类型

1. typeof: 返回对应的字符串，但是null返回的是`'object'`，且无法区分`Object`类型具体是哪一种。

2. `instanceof`: 原理是判断右边构造函数的`prototype`是否在左边值的原型链上。

3. `Object.prototype.toString.call()`，可以准确判断数据类型，返回值形式为`[object xxx]`

### 15. 如何避免js阻止DOM渲染

感觉这题可以是为了考察浏览器的渲染过程，所以渲染过程也可以说一说。

1. 尽量把嵌入的js脚本放到body的最下面，这样会等DOM渲染完才执行js

2. 可以给外链的`script`加上`sync`或`defer`来异步加载脚本，这样在脚本加载过程中不会阻塞DOM渲染，不过当脚本加载完后还是会执行且阻塞DOM渲染只是节省了请求的时间。但是两者有区别，sync一旦加载完脚本立即执行，defer执行时机不定，会在`DOMContentLoaded`事件之前执行。

3. 为了节约请求时间，对于一些比较小的js可以采用内联的方式来嵌入html文件。

4. 有一些大的js就不适合内联，那么可以采用压缩的方式减小体积降低请求时间。

### 16. js数组怎么去重?

1. reduce

2. Set

3. for

### 17. 字面量new出来的对象和 Object.create(null)创建出来的对象有什么区别?

字面量和new创建出来的对象都会继承Object的属性和方法，它们的隐式原型指向Object的显式原型。

而 `Object.create(null)`创建出来的对象原型为null,作为原型链的最顶端，没有继承Object的方法和属性。

### 18. 多次bind的结果

无效，bind的实现是内部返回一个函数，函数里调用了call或apply，只有第一次bind有效。

### 19. new fn 和 new fn()区别？

### 20. Json.stringfy()方法

该方法有1个必须的参数和2个可选参数：

1. value: 要被序列化成json字符串的值，可以是除了循环引用对象和BigInt以外的值（都抛出TypeError错误）
* value为单独的undefined或函数结果为undefined，作为对象属性值的undefined或函数会被忽略，作为数组项的undefined或函数会被转换成null.

* 所有以 symbol 为属性键的属性都会被完全忽略掉

* NaN 和 Infinity 格式的数值及 null 都会被当做 null。

* 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
2. replacer: 1个函数或1个字符串数组，函数的参数为key和value，若是数组则只有数组中存在的属性会被序列化
* 函数如果返回undefined，则传入该函数的属性值不会被序列化，但是如果传入的是要序列化的数组的元素，则会是null
3. space: 1个数字或字符串，数字表示缩进用的空格数，最大为10;字符串则被用作空格；如果不提供该参数或为null，则没有空格。注意：
* 如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是该对象被序列化，而是调用 toJSON 方法后的返回值会被序列化

### 21. Object.keys()与Object.getOwnPropertyNames()的区别？

1. 都是用来获取对象属性组成的数组

2. `Object.keys()`只能获取对象的可迭代属性名，`Object.getOwnPropertyNames()`则获取对象自身的所有属性名，即`enumerable`为`false`的属性`Object.keys()`获取不到

3. 返回的属性名顺序为字典序

4. `Object.keys()`获取不到数组的`length`属性，而`Object.getOwnPropertyNames()`可以，原因是数组的length属性是不可迭代的
   
    Object.getOwnPropertyDescriptor([],'length')
    // { value: 0, writable: true, enumerable: false, configurable: false }

## 👀核心

### 1.闭包及其应用 ？

**JavaScript之所以存在闭包是因为我们在词法作用域的环境下写代码，而其中的函数也是值，可以随意传来传去。**

[【JavaScript修炼】闭包和虽死犹存的函数](https://blog.csdn.net/laplacepoisson/article/details/124662698)

1. 闭包就是函数及其对周围环境的引用。通常在实践中，我们所认为的闭包是这样的：如果一个函数引用了它的外部变量，且外部变量所在的这个执行上下文已经被销毁了，但是这个函数被调用时依然能访问到那些变量，这就是闭包。

2. 从内存模型的角度来理解的话就是：遇到函数调用，首先创建一个空的执行上下文，然后进行代码执行前的准备工作，包括使用函数的arguments初始化变量对象，将变量声明函数声明等添加到变量对象，确定作用域链，确定this指向等。然后还会对函数内部的函数进行**预扫描（词法扫描）**，如果发现其有对外部函数变量的引用就会在堆中创建一个closure的内部对象，用来保存这些变量，这个也就是我们所说的闭包。

利用闭包可以写一个模块管理器：

    var MyModules = (function Manager() {
      var modules = {}
    
      function define(name, deps, impl) {
        for (var i = 0; i < deps.length ; i++) {
          deps[i] = modules[deps[i]]
        }
        modules[name] = impl.apply(impl , deps)
      }
    
      function get(name) {
        return modules[name]
      }
    
      return {
        define:define,
        get: get
      }
    })()
    
    // 定义模块
    MyModules.define('bar', [], function () {
      function hello(who) {
        return 'hello ' + who
      }
      return {
        hello
      }
    })
    
    var bar = MyModules.get('bar')

### 2.谈谈javascript作用域链？

[【JavaScript修炼】变量对象与作用域链_前端corner的博客-CSDN博客](https://blog.csdn.net/laplacepoisson/article/details/124658971)

当执行一段JavaScript代码（全局代码或函数）时，JavaScript引擎会创建为其创建一个执行上下文（Execution Context），在页面加载后会首先创建一个全局的执行上下文，每遇到函数调用就会创建一个执行上下文并压入执行上下文栈中。作用域链的作用是用于解析标识符，当执行上下文被创建后，js引擎进入执行上下文，用arguments、命名参数和该函数中的所有局部变量创建一个变量对象，然后激活对象，将变量对象添加到当前的执行上下文中。然后利用函数内部的[[Scopes]]属性初始化作用域链，将当前执行上下文的激活对象添加到作用域链的最前端。

函数的[[Scopes]]属性是在函数定义时就确定的，因为javascript的作用域是词法作用域。

### 3.如何理解JavaScript原型链？

JavaScript中的每个对象都有一个__proto__属性，我们称之为原型，而原型的值也是一个对象，因此它也有自己的原型，这样就串联起来了一条原型链，原型链的链头是Object,它的__proto__比较特殊，值为null。

原型链的作用是用于对象继承，函数A的原型属性(prototype property)是一个对象，当这个函数被用作构造函数来创建实例时，该函数的原型属性将被作为原型赋值给所有对象实例，比如我们新建一个数组，数组的方法便从数组的原型上继承而来。

当访问对象的一个属性时, 首先查找对象本身, 找到则返回; 若未找到, 则继续查找其原型对象的属性(如果还找不到实际上还会沿着原型链向上查找, 直至到根). 只要没有被覆盖的话, 对象原型的属性就能在所有的实例中找到，若整个原型链未找到则返回undefined。

### 4. 如何确定this的指向？

一般this就是调用函数的对象。

要确定this的指向，首先得知道什么是MemberExpression.

* * PrimaryExpression // 原始表达式 可以参见《JavaScript权威指南第四章
  
  * FunctionExpression // 函数定义表达式
  
  * MemberExpression [ Expression ] // 属性访问表达式
  
  * MemberExpression . IdentifierName // 属性访问表达式
  
  * new MemberExpression Arguments // 对象创建表达式

* 确定this的关键是先计算 MemberExpression 得到ref，然后判断ref是否为一个Reference。

* **属性访问表达式**返回Reference,例如`foo.bar`

* 括号并不会调用括号内的reference的GetVlue，如`(foo.bar)`

* **赋值（“=”）操作符**、**二元逻辑运算符（“||”）**、**逗号操作符**计算算得到的ref是调用GetValue得到的值，所以结果不是Reference，如`(foo.bar = foo.bar)`

* getBase得到的值只可能是 undefined, an Object, a Boolean, a String, a Number, 和 an environment record 中的一种。

**只有当ref既是Reference又是一个对象的时候，this的值是调用getBase得到的结果，否则this都为undefined,只不过在非严格模式下，undefined会被隐式转换为全局对象。最常见的计算结果为Reference的MemberExpression就是属性访问表达式了。这也就是为什么我们常说this就是调用函数的对象。****

### 5. 说一说IIFE

* IIFE就是立即调用的函数表达式。

* 可以像下面这样调用它
  
  * `(function(){})()`
  
  * `(function(){}())`

* 或者是像下面这样，将圆括号左侧变为一个表达式，也可以调用它：
  
  * `var i = function(){}()`
  
  * `!function(){}()`
  
  * `true && function(){}()`

* 立即执行函数的应用：
  
  * 可以保存闭包状态
  
  * 使用模块化的写法避免全局变量的污染

### 6.promise只能进行异步操作吗？

这个问题的本质其实就是有一个函数，它接收了一个回调函数，能不能根据函数的执行清况来决定什么时候调用回调函数呢？

先想一想如果可以的话会怎么样？优点的话当然是很灵活，我根据具体的情况来选择回调的执行时刻。缺点其实也很明显，就是我不能明确回调的调用时刻了，因为有些时候函数的执行情况我们是不好去判定的。

这里的话可以考虑一个清况，比如我们new了一个promise，在这个promise里面我们直接确定resolve了一个值，并没有进行异步操作，那么这个时候调用then方法会不会立即执行呢？答案是不会的。

第一点就是在PromiseA+规范里明确指出Promise只能用异步调用的方式。

第二点就是为什么？如果根据函数执行情况来决定何时调用回调，那么就有一个问题，我称之为依赖链，就是`调用回调 -> 函数执行情况 -> 函数位置？函数调用者？函数参数？`，于是代码就混乱了，但是如果说我们统一都是用异步的方式来执行回调就不会有这样的问题，我们不用去关系函数是什么执行的。

这就是我理解的Promise统一为异步调用的意义。

顺便提及一下，我们在写传统回调的时候，如果想要和promise一样统一为异步调用，我们可以用setTimeout0将回调做一层包裹，这样回调就肯定是异步调用的了。

### 7. this设计缺陷和应对方案

    var myObj = {
      name : "john", 
      showThis: function(){
        console.log(this)
        function bar(){console.log(this)}
        bar()
      }
    }
    myObj.showThis()
    
    你会发现函数 bar 中的 this 指向的是全局 window 对象，
    而函数 showThis 中的 this 指向的是 myObj 对象。
    这就是 JavaScript 中非常容易让人迷惑的地方之一，也是很多问题的源头。

1. 嵌套函数中的this不会从外层函数中继承。解决方式是在外层函数中声明一个变量来保存this，然后在内层函数使用该变量。

2. 第二种方式就是内层函数使用ES6的箭头函数，因为它不会创建自己的执行上下文，它的this取决于外部函数。

3. 普通函数的this默认指向全局window对象，但是严格模式下，函数的执行上下文中的this默认为undefined

### 8. 手写call、apply、bind？

**call**

核心代码就两行: 让ctx调用该函数并返回执行结果

    Function.prototype.myCall = function (ctx) {
      // 让ctx调用该函数并返回执行结果
      ctx.fn = this
      return ctx.fn(...Array.from(arguments).slice(1)) 
    }
    
    Function.prototype.my_call = function (context) {
      // 调用者不是函数，抛出错误
      if (typeof this !== 'function') {
        throw new Error('Not a function')
      }
      // context不传参时默认为window
      context = context || window
      // 为context设置fn方法
      context.fn = this
      // 将arguments伪数组转为真正的数组并截取第一个context参数后的参数
      let args = Array.from(arguments).slice(1)
      // 调用fn并传入参数
      let result = context.fn(...args)
      // 删除context上的fn方法
      delete context.fn
      // 返回执行结果
      return result
    }

**apply**

核心代码也两行，只不过参数是数组

    Function.prototype.myCall = function (ctx) {
      // 让ctx调用该函数并返回执行结果
      ctx.fn = this
      return ctx.fn(...arguments[1]) 
    }
    
    Function.prototype.my_apply = function (context) {
      // 调用者不是函数，抛出错误
      if (typeof this !== 'function') {
        throw new Error('Not a function')
      }
    
      let result
    
      // context不传参时默认为window
      context = context || window
    
      // 为context设置fn方法
      context.fn = this
    
      if (arguments[1]) {
        result = context.fn(...arguments[1])
      } else {
        result = context.fn()
      }
    
      delete context.fn
    
      return result
    }

**bind**

核心代码就三行：返回一个函数

    Function.prototype.bind = function (ctx) {
      const _this = this
      const args = Array.prototype.slice.call(arguments , 1)
      return function F() {
        return _this.apply(ctx , args.concat(...arguments))
      }
    }
    
    
    Function.prototype.myBind = function (context) {
      // 判断是否是一个函数
      if (typeof this !== 'function') {
        throw new TypeError('Not a Function')
      }
      // 保存调用bind的函数
      const _this = this
      // 保存参数
      const args = Array.prototype.slice.call(arguments, 1)
      // 返回一个函数
      return function F() {
        // 判断是不是new出来的
        if (this instanceof F) {
          // 如果是new出来的
          // 返回一个空对象，且使创建出来的实例的__proto__指向_this的prototype，且完成函数柯里化
          return new _this(...args, ...arguments)
        } else {
          // 如果不是new出来的改变this指向，且完成函数柯里化
          return _this.apply(context, args.concat(...arguments))
        }
      }
    }

### 9. javascript继承方式及其优缺点

[【JavaScript修炼】javascript多种继承方式及其优缺点_前端corner的博客-CSDN博客](https://blog.csdn.net/laplacepoisson/article/details/124624832)

### 10. 构造函数是干什么的?

构造函数是用来创建和初始化对象的。通常和new 操作符搭配使用。在构造函数中可以通过`this`给将来的实例添加属性。es6的class就是基于构造函数和原型链的语法糖。

### 11. class以及继承

class中的继承其实还是原生的寄生组合式继承

核心原理很简单，子构造函数的prototype指向父构造函数的prototype.但是这好吗？这不好，因为这样所有由子构造函数实例化的对象都会访问同一个prototype，甚至修改父构造函数的prototype。

    function Fn(){}
    Fn.prototype = Father.prototype
    Child.prototype = new Fn()
    
    function createObj(father){
      function F(){}
      F.prototype = father.prototype
      return new F()
    }
    
    function inheritPrototype(father , child){
      let prototype = createObj(father)
      prototype.constructor = child
      child.prototype = prototype
    }
    
    inheritPrototype(Father , Child)    // 调用的时候

class继承必须在子类的构造函数里调用`super()`函数，`super`既可以当作函数使用，也可以当作对象使用：

* `super()`相当于`A.constructor.call(B)`，B继承A

* `super.sayHi()`相当于`A.prototype.sayHi()`，这里注意`super`指向`A.prototype`，所以`A`本身的属性和方法是访问不到的。
  
    class A {
  
      constructor() {
        this.x = 1;
      }
      print() {
        console.log(this.x);    // 这个方法是在A.prototype上的
      }
  
    }
  
    class B extends A {
  
      constructor() {
        super();
        this.x = 2;
      }
      m() {
        super.print();        // this指向B
      }
  
    }
  
    let b = new B();
    b.m() // 2

在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例。

## 👀ES6

### 1.class

es6的class其实就是个语法糖，babel转出来的依旧是寄生组合式继承。 具体的使用没有太多的可以说的，需要注意super即可以当函数，也可以实例。这部分不做细说，因为很复杂，有兴趣参考[es6 Class的继承](http://es6.ruanyifeng.com/#docs/class-extends#super-%E5%85%B3%E9%94%AE%E5%AD%97)。需要注意的是，**ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。**

### 2. let const var 的区别？

1. var声明的变量是**函数作用域**的，会发生变量提升现象。在编译的过程中，会把var声明的变量提升到函数作用域顶部，变量的值为undefined。然后在代码声明的地方才被赋值。这个特性允许我们在变量声明之前使用变量。

2. let和const都是**块作用域**的，不会有变量提升现象。所以必须在声明之后才能使用。如果在声明之前使用会报错。

3. let 和 const声明的变量是与其所在**作用域绑定**的，会存在**暂时性死区**，即作用域内，变量声明之前的区域。在暂时性死区中访问该变量会报错。

4. var 和 let 声明变量时都可以不赋值，此时变量的值为undefined。但是const必须在声明时就**初始化**，不允许先声明后赋值。

5. let 和 const 都不允许**重复声明**而var可以。

6. const 用于声明**只读常量**，所谓常量是指并不是指它的值不变，而是指它所指向的内存地址保存的数据不变。对于Number、String、布尔值该地址所保存的就是值本身，所以不能修改。而对于对象该地址只是保存了对象的指针，所以可以修改。

7. let 和 const 声明的变量不属于**顶层对象**，var声明的变量是顶层对象的属性。在浏览器顶层对象为window，node中则为global。

扩展：**怎么冻结对象？**

可以封装一个递归函数，使用`Object.freeze()`来冻结。

    var constantize = (obj) => {
      Object.freeze(obj);
      Object.keys(obj).forEach( (key, i) => {
        if ( typeof obj[key] === 'object' ) {
          constantize( obj[key] );
        }
      });
    };



### 3. 说说es6新特性

1. 引入了块级作用域，let, const

2. 新增箭头函数
   
   1. 没有自己的this，this指向父级作用域的this
   
   2. 不能使用call、apply、bind改变this指向
   
   3. 不能用作构造函数，new会报错,不允许在函数体使用new.target，会报错
   
   4. 不能使用arguments对象，但是可以`...args`

3. 新增模板字符串

4. 新增类class





## 👀DOM

### 1.直接绑定和事件监听有哪些区别？

* 直接绑定对于一个事件只能有**一个处理函数**，再次绑定会覆盖处理函数。事件监听对于同一事件可以有**多个处理函数。**
* 只有**html元素、document对象，window对象**可以使用直接绑定；监听器除那三个还可以是**任何其他支持事件的对象**，如[XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest).
* 事件监听可以通过第三个参数（配置对象Options或布尔值useCapture,默认为false）**指定事件监听器的触发阶段（冒泡或捕获）。**

补充：

* click 事件的运行顺序在 [mousedown](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousedown_event) 和 [mouseup](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseup_event) 事件之后。
* [mdn关于兼容性的封装](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#%E5%85%BC%E5%AE%B9%E6%80%A7)

### 2.节流(throttle)防抖 (debounce)

* debounce: 事件触发时，相应函数延迟一会才执行。当密集触发时函数执行会被一直延迟。应用：输入框发送请求。
* throttle: 事件触发时，节流函数会按照一定频率执行事件处理函数。

[手撕源码系列 —— lodash 的 debounce 与 throttle](https://zhuanlan.zhihu.com/p/91110334)

### 3. 事件委托

事件委托利用了冒泡的特点，举个例子，如果想要在大量子元素中单击任何一个都可以运行一段代码，您可以**将事件监听器设置在其父节点**上，**并让子节点上发生的事件冒泡到父节点上，而不是每个子节点单独设置事件监听器。**

先捕获后冒泡。

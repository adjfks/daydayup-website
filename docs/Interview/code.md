# 手写题

## JavaScript

### 1. 深拷贝

```js
const iterables = ['Object' , 'Map' , 'Set' , 'Array' , 'Arguments']  // 可迭代对象

function deepClone(target , map = new WeakMap()) {
  if (!isObject(target)) return target

  const type = getType(target)

  let res
  if (iterables.includes(target)) {
    res = new target.constructor()
  } else {
    // null , Number , String , Boolean , Symbol , RegExp , Function , Error , Date
    return directClone(target , type)
  }

  if (map.get(target)) return map.get(target)
  map.set(target , res)

  if (type === 'Map') {
    target.forEach((key, value) => {
      res[key].set(deepClone(target , map))
    })
  }

  if (type === 'Set') {
    target.forEach((key, value) => {
      res[key].add(deepClone(target , map))
    })
  }

  target.forEach((key, value) => {
    res[key] = deepClone(value , map)
  })

  return res

}




function isObject(target) {
  return typeof target !== null && typeof target === 'Object' || typeof target === 'Function'
}

// 直接克隆
function directClone(target, type) {
  // null , Number , String , Boolean , Symbol , RegExp , Function, Error , Date
  switch (type) {
    case 'Number':
    case 'String':
    case 'Boolean':
    case 'Error':
    case 'Date':
      return new target.constructor(target.valueOf())
    case 'Function':
      return target
    case 'Symbol':
      return Object(Symbol.prototype.valueOf.call(target))
    case 'RegExp':
      return new RegExp(target.source , target.exec(/\w$/))
  }
}

// 获取具体类型
function getType(target) {
  // '[object Number]'
  return Object.prototype.toString.call(target).slice(8 , -1)
}
```

### 2. 寄生组合式继承

```js
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

```

## 排序算法

https://www.runoob.com/w3cnote/quick-sort-2.html

### 1. 冒泡排序

```js
function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++){
    for (let j = 0; j < len - 1 - i; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+ 1] = temp
      }
    }
  }
  return arr
}
```

### 2. 快排

快速排序的最坏运行情况是 O(n²)，比如说顺序数列的快排。但它的平摊期望时间是 O(nlogn)，且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。

1. 从数列中挑出一个元素，称为 "基准"（pivot）;

2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；

3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；

```js
function quickSort(arr , left , right) {
  const len = arr.length
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : len - 1
  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr , partitionIndex + 1 , right)
  }
  return arr
}

function partition(arr , left , right) {
  const pivot = left
  let index = pivot
  for (let i = pivot + 1; i <= right; i++){
    if (arr[i] < arr[pivot]) {
      index++
      swap(arr, i, index)
    }
  }
  swap(arr , index , pivot)
  return index
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
```

## CSS

### 1. 常见的布局方式

13. 水平垂直居中
    
    .container {
    
        display: flex | grid;
        place-items: center;    // align-item 和 justify-item 的简写属性
    
    }

14. 可解构的自适应布局
    
     .container {
    
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
         }
        
         .box {
           flex: 0 1 150px;
           margin: 5px;
           background-color: green;
           height: 150px;
         }

15. 经典的sidebar

```css
.container {
      display: grid;
      grid-template-columns: minmax(250px, 25%) 1fr;   // sidebar最小宽度250px，默认占25%
      height: 600px;
    }
```

4. 占据固定高度的header和footer

```css
.container {
      height: 600px;
      border: 1px solid #ccc;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }
```

5. 经典圣杯布局

header + footer + left-side + right-side + main

```css
.container {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
}


.header {
    grid-column: 1 / 4;   // 从第一列到第四列
}


.left-side {
    grid-column: 1 / 2;
}

.main {
    grid-column: 2 / 3;
}


.right-side {
    grid-column: 3 / 4;
}


.footer {
    grid-column: 3 / 4;
}
```

# 输出题

## 原型链相关

### 1.

构造函数中使用`this.method = function(){}`添加的方法是每个实例单独的。

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function() {
    console.log(age + "岁的" + name + "在吃饭。");
  }
}

Person.run = function () {}
Person.prototype.walk = function () {}

let p1 = new Person("jsliang", 24);
let p2 = new Person("jsliang", 24);

console.log(p1.eat === p2.eat);     // false
console.log(p1.run === p2.run);     // true      等于：undefined === undefined
console.log(p1.walk === p2.walk);     // true

```

## 事件循环相关

### 1.

```js
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);

// 输出结果为：1 7 3 5 2 6 4。
```

几点注意：

- 定时器的回调是一个宏任务，Promise.then中的回调是一个微任务。

### 2.

```js
console.log('script start')

const interval = setInterval(() => {
  console.log('setInterval')
}, 0)

setTimeout(() => {
  console.log('setTimeout 1')

  Promise.resolve()
    .then(() => console.log('promise 3'))
    .then(() => console.log('promise 4'))
    .then(() => {
      setTimeout(() => {
        console.log('setTimeout 2')
        Promise.resolve().then(() => console.log('promise 5'))
          .then(() => console.log('promise 6'))
          .then(() => clearInterval(interval))
      }, 0)
    })
}, 0)

Promise.resolve()
  .then(() => console.log('promise 1'))
  .then(() => console.log('promise 2'))

// 
script start
promise 1
promise 2
setInterval
setTimeout 1
promise 3
promise 4
setInterval
setTimeout 2
promise 5
promise 6
```



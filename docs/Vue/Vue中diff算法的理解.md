# Vue中diff算法的理解

## 描述
vue中的diff算法是用来比较新旧VNode最小化操作DOM的算法,通过借助virtual dom的能力,可以尽可能减少DOM操作带来的浏览器重绘和回流,减少性能的损耗.

## 复杂度
diff算法的复杂度是`O(n^3)`,这是一个最小编辑距离,在比较字符串的最小编辑距离时使用动态规划的方案需要的时间复杂度是`O(mn)`，但是对于DOM来说是一个树形结构，而树形结构的最小编辑距离问题的时间复杂度在30多年的演进中从`O(m^3n^3)`演进到了`O(n^3)`，关于这个问题如果有兴趣的话可以研究一下[论文](https://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf)。 
对于原本想要提高效率而引入的diff算法使用`O(n^3)`的时间复杂度显然是不太合适的，如果有1000个节点元素将需要进行十亿次比较，这是一个昂贵的算法，所以必须有一些妥协来加快速度，对比较通过一些策略进行简化，将时间复杂度缩小到`O(n)`，虽然并不是最小编辑距离，但是作为编辑距离与时间性能的折中是一个比较好的解决方案。


## 虚拟DOM
在vue中使用`vnode`对象来表示一个DOM节点：
```javascript
var VNode = /** @class */ (function () {
    function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
        this.tag = tag;
        this.data = data;
        this.children = children;
        this.text = text;
        this.elm = elm;
        this.ns = undefined;
        this.context = context;
        this.fnContext = undefined;
        this.fnOptions = undefined;
        this.fnScopeId = undefined;
        this.key = data && data.key;
        this.componentOptions = componentOptions;
        this.componentInstance = undefined;
        this.parent = undefined;
        this.raw = false;
        this.isStatic = false;
        this.isRootInsert = true;
        this.isComment = false;
        this.isCloned = false;
        this.isOnce = false;
        this.asyncFactory = asyncFactory;
        this.asyncMeta = undefined;
        this.isAsyncPlaceholder = false;
    }
    Object.defineProperty(VNode.prototype, "child", {
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        get: function () {
            return this.componentInstance;
        },
        enumerable: false,
        configurable: true
    });
    return VNode;
}());
```
当响应式数据发生改变时，将会触发对应的watcher去调用更新函数，此时生成一个新的虚拟DOM，将新旧虚拟DOM进行diff算法对比后，对`vnode`的`elm`指向的真实DOM进行patch修改，之后将新虚拟DOM赋值给旧虚拟DOM.


## diff策略
两棵树的diff是一个最小编辑距离问题，时间复杂度为`O(n^3)`，vue中引入了一些机制来辅助diff从而达到`O(n)`的时间复杂度。
首先提出两个假设：

1. 两个不同类型的元素将产生不同的树。
2. 通过渲染器附带key属性，开发者可以指定哪些元素是稳定的。

解释一下就是：

1. 只进行同层级的比较，跨层级的修改将视为删除或新增。
2. 如果是不同类型的元素，则视为是新增，而不会递归子节点。
3. 如果是列表等比较相似的内容，可以通过key来指示移动，创建或删除。

比较后会出现几种情况，分别进行相应的操作：

1. 此节点被添加或移除 -> 添加或移除该节点。
2. 元素相同但属性不同 -> 将旧属性改为新属性。
3. 文本内容不同 -> 将旧文本改为新文本。
4. 节点tag和key是否改变 -> 改变则移除后创建新元素。

## 分析
这里分析vue2.7.14的源码，且只列出源码中比较核心的逻辑。

判断2个节点是否为同一节点：
```javascript
function sameVnode(a, b) {
  return (a.key === b.key &&
    a.asyncFactory === b.asyncFactory &&
    ((a.tag === b.tag &&
      a.isComment === b.isComment &&
      isDef(a.data) === isDef(b.data) &&
      sameInputType(a, b)) ||
      (isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error))));
}
```
可以看到，`sameVnode`要满足几个条件：

1. key相同
2. 都为异步或都为同步节点
3. 标签相同
4. 都为注释或都不为注释
5. 都有data或都没有data
6. ...

patch函数：
```javascript
function isDef(v) {
  return v !== undefined && v !== null;
}

function patch(oldVnode, vnode) {
  var isRealElement = isDef(oldVnode.nodeType);
  if (!isRealElement && sameVnode(oldVnode, vnode)) {
    patchVnode(oldVnode, vnode)
  } else {
    
  }
}
```
判断是否为vnode的方式是查看节点是否存在`nodeType`属性，如果存在说明是真实DOM节点，虚拟节点上不存在`nodeType`属性。当是虚拟节点且是sameVnode时调用`patchVNode`进行diff以及对子节点的递归diff，否则如果是第一次patch也就是组件第一次挂载或发现元素的标签不同那就认为是不同的元素，直接调用`createELm`创建新的`DOM`元素并替换旧元素。

`patchVnode`中除了进行节点自身属性等的修改，还需要进行子节点的更新。对于子节点分两种情况处理：

1. 如果都是text节点且内容不同，那么就直接修改text内容
2. 如果新节点`vnode`没有`text`，则又分为4种情况：
   1. 都有`children`且不相同，调用`updateChildren`
   2. `vnode`有`children`,`oldVnode`没有，则清除`oldVnode`的`text`且挂载children
   3. `oldVnode`有`children`，`vnode`没有，则删除`oldVnode`的`children`
   4. `oldVnode`有`text`,将`text`清空。
```javascript
function patchVnode(oldVnode, vnode) {
  // 如果新节点不是text节点
  if (isUndef(vnode.text)) {
    // 新旧节点的children都存在且不相等，调用updateChildren进行比较
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch)
        updateChildren(elm, oldCh, ch);
    }
    // 新节点children存在旧节点children不存在
    else if (isDef(ch)) {
      {
        checkDuplicateKeys(ch);
      }
      // 旧节点的子节点是text则清除并插入新节点的子节点
      if (isDef(oldVnode.text))
        nodeOps.setTextContent(elm, '');
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
    }
    // 旧节点存在children而新节点不存在，则删除旧节点的children
    else if (isDef(oldCh)) {
      removeVnodes(oldCh, 0, oldCh.length - 1);
    }
    // 新旧节点都没有children且旧节点有文本子节点而新节点既没有text也没有children,则删除旧的text
    else if (isDef(oldVnode.text)) {
      nodeOps.setTextContent(elm, '');
    }
  }
  // text不同更新text
  else if (oldVnode.text !== vnode.text) {
    nodeOps.setTextContent(elm, vnode.text);
  }
}
```

`updateChildren`源码如下：
```javascript
function updateChildren(parentElm, oldCh, newCh) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVnode = oldCh[0];
  var oldEndVnode = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVnode = newCh[0];
  var newEndVnode = newCh[newEndIdx];
  var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
    }
    else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    }
    else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    }
    else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    else if (sameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
      canMove &&
        nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    else if (sameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
      canMove &&
        nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    }
    else {
      if (isUndef(oldKeyToIdx))
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
      if (isUndef(idxInOld)) {
        // New element
        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
      }
      else {
        vnodeToMove = oldCh[idxInOld];
        if (sameVnode(vnodeToMove, newStartVnode)) {
          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldCh[idxInOld] = undefined;
          canMove &&
            nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
        }
        else {
          // same key but different element. treat as new element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        }
      }
      newStartVnode = newCh[++newStartIdx];
    }
  }
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
  }
  else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
}
```

其中创建了一个`oldVnode`的`key -> idx`的map，用于后续通过key寻找可复用的旧节点。

为了方便解释上述过程，直接讲解一个示例：
首先用四个指针分别指向新旧节点数组的首尾。
```javascript
old VNode: a(oldStartIdx) b c d e f(oldEndIdx)
new VNode: b(newStartIdx) f g(newEndIdx)
DOM Node:  a b c d e f
```
进行第一轮比较，比较`oldStartIdx和newStartIdx`,`oldEndIdx和newEndIdx`,`oldStartIdx和newEndIdx`，`oldEndIdx和newStartIdx`，发现没有节点相同。此时分为2种情况，有key和无key, 无key时直接创建新节点插入到`a(oldStartIdx)`节点前面。有key时取`newStartIdx`的key到`oldVnode`中找，此时发现`oldKeyToidx`为空，创建`oldVnode.key -> idx`的map,然后找到了`b`，将b移动到`a（oldStartIdx）`的前面，然后将oldVnode中的b设置为`undefined`,`newStartIdx++`向中间靠拢。
```javascript
old VNode: a(oldStartIdx) undefined c d e f(oldEndIdx)
new VNode: b f(newStartIdx) g(newEndIdx)
DOM Node:  b a c d e f
```
进行第二轮比较，比较`oldStartIdx和newStartIdx`,`oldEndIdx和newEndIdx`,`oldStartIdx和newEndIdx`，`oldEndIdx和newStartIdx`，发现`oldEndIdx和newStartIdx`相同，将`DOM Node`中的`f`移动到`a(oldStartIdx)`前，然后指针向中间靠拢，`oldEndIdx--``newStartIdx++`
```javascript
old VNode: a(oldStartIdx) b c d e(oldEndIdx) f
new VNode: b f g(newEndIdx)(newStartIdx)
DOM Node:  b f a c d e
```
进行第三轮比较，比较`oldStartIdx和newStartIdx`,`oldEndIdx和newEndIdx`,`oldStartIdx和newEndIdx`，`oldEndIdx和newStartIdx`，没有找到相同的，此时拿`newStartIdx`对应的key去`oldKeyToIdx`中找,没有找到，直接创建新节点后插入`a(oldStartIdx)`DOM节点的前面。然后`newStartIdx++`
```javascript
old VNode: a(oldStartIdx) undefined c d e(oldEndIdx) f
new VNode: b f g(newEndIdx) (newStartIdx)
DOM Node:  b f g a c d e
```
此时循环结束，有两个选择：

- 如果`oldStartldx > oldEndldx`，说明老节点遍历完成了，新的节点比较多，所以多出 来的这些新节点，需要创建出来并添加到真实DOM Node后面。
- 如果`newStartldx >newEndldx`，说明新节点遍历完成了，老的节点比较多，所以多 出来的这些老节点，需要从真实DOM Node中删除这些节点。

此时我们符合场景二，所以需要从真实DOM Node中删除`[oldStartldx，oldEndldx]`区间 中的Node节点，根据上述内容，即需要删除a c d e四个节点，至此diff完成。
```javascript
old VNode: a(oldStartIdx) undefined c d e(oldEndIdx) f
new VNode: b f g(newEndIdx) (newStartIdx)
DOM Node:  b f g
```
diff完成之后便是将new VNode作为old VNode以便下次diff时使用，此外关于组件的diff，组件级别的diff算法比较简单，节点不相同就进行创建和替换，节点相同的话就会对其子节点进行更新，最后关于调用createElm来根据VNode创建真实的DOM元素，如果是一个组件，那么 createComponent会返回true，因此不会进行接下来的操作，如果不是组件，会进行节点创建工作，并会递归对孩子创建节点。

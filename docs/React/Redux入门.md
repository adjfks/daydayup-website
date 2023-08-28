# 简介

[官方文档](https://redux.js.org/introduction/getting-started)<br />一个JS应用的可预测状态管理容器。<br />除了React，其他框架也可以使用。<br />极小的体积，包括依赖仅2KB。

# 安装

## Redux Tookit

一个Redux工具包

```shell
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

## 创建一个React Redux应用

使用模板创建，将包含Redux ToolKit

```shell
# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

# Next.js using the `with-redux` template
npx create-next-app --example with-redux my-app
```

## Redux Core

```shell
# NPM
npm install redux

# Yarn
yarn add redux
```

# 简单使用

## 创建

调用createStore并传入一个reducer函数即可，reducer函数参数：

1. 旧的state
2. action: 调用store.dispatch时会传过来
   
   ```javascript
   import { createStore } from 'redux'
   
   ```

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
} 

const store = createStore(counterReducer)

```


## 订阅
调用subscribe可以订阅sotre的dispatch
```javascript
store.subscribe(() => console.log(store.getState()))
```

一般我们不会直接调用subscribe订阅dispatch，而是会使用像React Redux一类的视图绑定库。

## 触发

调用dispatch并传入一个action

```javascript
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
```



# 使用Redux ToolKit简化

Redux ToolKit可以简化Redux创建和使用，例如在reducer中我们需要返回完整的状态object，使用ToolKit则可以直接对状态进行操作，因为ToolKit底层使用了Immer

## 创建

```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})
```

## 订阅

```javascript
// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))
```

## 触发

```javascript
// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
```



# Redux必学

## 浏览器扩展

- [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

## 概念和术语

### 不可变性 Immutable

Redux期望所有的状态更新都是以不可变方式进行，即需要完整拷贝原数据后再进行改动更新。

### Actions

一个带有type属性的object对象，例如:

```javascript
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

### Actions Creators

```javascript
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

### Reducers

需要遵守的规则

1. 只能通过参数的state和action计算新state。
2. 必须以不可变形式进行变更。
3. 不能使用异步逻辑，不能产生副作用。
   


# 未完待更新。。。

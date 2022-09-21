# asyncPool限制并发

分为ES6写法和ES7写法

## ES7

利用await + Promise.race + Promsie.all

```js
const asyncPool = async (limit, params, loadImg) => {
  const all = []
  const executing = []
    
  for (const param of params) {
    const p = loadImg(param)
    all.push(p)
    // push比then先执行
    const e = p.then(() => executing.splice(executing.indexOf(e), 1))
    executing.push(e)

    if (limit <= params.length) {
      if (executing.length >= limit) await Promise.race(all)
    }
  }
  return Promise.all(all)
}

asyncPool(limit, urls, loadImg).then(res => console.log(res))

```



## ES6

待补充。。。
